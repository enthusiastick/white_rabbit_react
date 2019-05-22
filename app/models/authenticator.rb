class Authenticator
  INVALID_MESSAGE = "Invalid email/username & password combination.".freeze

  def initialize(session_hash)
    @login = session_hash["login"]
    @password = session_hash["password"]
    @status = :created
    if @login.match(User::EMAIL_REGEXP)
      @user = User.find_by(email: @login.downcase)
    else
      @user = User.find_by(handle: @login)
    end
    set_error_and_status unless authenticated?
  end

  attr_reader :error, :status, :user

  def authenticated?
    user.present? && correct_password? && !locked?
  end

  private

  def correct_password?
    user.authenticate(@password)
  end

  def locked?
    user.locked?
  end

  def set_error_and_status
    if !user.present?
      @error = { error: INVALID_MESSAGE }
      @status = :unauthorized
    elsif locked?
      @error = { error: "Your account has been locked. Please contact a site administrator to unlock it." }
      @status = :unprocessable_entity
    else
      user.increment! :failed_sign_in_attempts
      @error = { error: INVALID_MESSAGE }
      @status = :unauthorized
    end
  end
end
