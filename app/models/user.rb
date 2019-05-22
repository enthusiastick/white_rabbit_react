class User < ApplicationRecord
  EMAIL_REGEXP = /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/
  HANDLE_REGEXP = /\A[A-Za-z0-9]+(?:[_-][A-Za-z0-9]+)*\z/

  before_save :downcase_email

  has_secure_password

  validates_format_of :email, with: EMAIL_REGEXP
  validates_format_of :handle, with: HANDLE_REGEXP
  validates_presence_of :email, :handle
  validates_uniqueness_of :email, :handle

  def authenticated?(attribute, token)
    digest = self.send("#{attribute}_digest")
    return false if digest.nil?
    BCrypt::Password.new(digest).is_password?(token)
  end

  def downcase_email
    self.email.downcase!
  end

  def generate_reset_digest
    self.password_reset_token = User.new_token
    update_attributes(password_reset_digest: User.digest(password_reset_token), password_reset_sent_at: Time.current)
  end

  def locked?
    failed_sign_in_attempts > 5
  end

  def password_reset_expired?
    (password_reset_sent_at + 2.hours).past?
  end

  def send_password_reset_email
    self.generate_reset_digest
    UserMailer.password_reset(self.id, self.password_reset_token).deliver_now
  end

  def terminate_remember_digest
    update_attributes(remember_digest: nil)
  end

  def to_param
    handle
  end

  def self.digest(string)
    cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST :
                                                  BCrypt::Engine.cost
    BCrypt::Password.create(string, cost: cost)
  end

  def self.new_token
    SecureRandom.urlsafe_base64
  end
end
