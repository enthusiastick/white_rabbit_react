class Api::V1::SessionsController < Api::ApiController
  def create
    authenticator = Authenticator.new(params[:session])
    if authenticator.authenticated?
      sign_in(authenticator.user)
      render json: authenticator.user.slice(:handle), status: authenticator.status
    else
      render json: authenticator.error, status: authenticator.status
    end
  end

  private

  def session_params
    params.require(:session).permit(:login, :password)
  end
end
