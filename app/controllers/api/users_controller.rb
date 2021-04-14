class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    # working
    render json: @user  
  end

  def create
    @user = User.create!(user_params)
  end

  def update
    @user = User.find params[:id]
    attributes = user_params.clone
    @user.update_attributes(attributes)
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :phone, :profile_picture, :bio, :province, :city, :neighbourhood, :password, :password_confirmation)
  end
end
