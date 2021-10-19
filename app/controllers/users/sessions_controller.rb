# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  # before_action :configure_sign_in_params, only: [:create]

  before_action :check_if_admin, only: [:index, :show, :update]


  def index
    @users = User.where(["email LIKE ?", "%#{params[:query]}%"])
  end

  def show
    unless @user = User.where(id: params[:id]).first
      render 'item/s404', status: 404
    end
  end

  def update
    user_params = params[:user]
    @user = User.where(id: params[:id]).first
    @user.update(first_name: user_params[:first_name],
                 last_name: user_params[:last_name],
                 email: user_params[:email])
    if @user.errors.empty?
      redirect_to users_list_path
    else
      render show_user_path(@user)
    end
  end

  # GET /resource/sign_in
  def new
    super
  end

  # POST /resource/sign_in
  def create
    super
  end

  # DELETE /resource/sign_out
  def destroy
    super
  end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end

end
