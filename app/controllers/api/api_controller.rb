class Api::ApiController < ActionController::API
  include ::ActionController::Cookies

  def authenticate_user_api!
    if !user_signed_in?
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

  def encode_token(hash)
    JWT.encode(hash, Rails.application.secrets.secret_key_base)
  end

  def decode_cookie(cookie)
    cookie.present? ? JWT.decode(cookie, Rails.application.secrets.secret_key_base).reduce({}, :merge) : {}
  end

  def current_user
    token = decode_cookie(cookies.signed[:jwt])
    User.find_by(handle: token["user_id"])
  end

  def sign_in(user)
    user.increment! :sign_in_count
    user.touch :last_signed_in_at
    user.update_column(:failed_sign_in_attempts, 0)
    token = encode_token({ user_id: user.handle })
    cookies.signed[:jwt] = { value: token, httponly: true, expires: 1.day.from_now }
  end

  def sign_out
    cookies.delete(:jwt)
  end

  def user_signed_in?
    !current_user.nil?
  end
end
