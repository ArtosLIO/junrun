class ApplicationController < ActionController::Base

  before_action :update_allowed_parameters, if: :devise_controller?

  protected

  def update_allowed_parameters
    devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:first_name, :last_name, :email, :password)}
    devise_parameter_sanitizer.permit(:account_update) { |u| u.permit(:first_name, :last_name, :email, :password, :current_password)}
  end

  private

    def render_404
      render file: "public/404.html", status: 404
    end

    def render_403
      render file: "public/403.html", status: 403
    end

    def check_if_admin
      if current_user
        render_403 unless current_user.role == 'admin'
      else
        render_403
      end
    end

end
