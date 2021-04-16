class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    # working
    render json: @user  
  end

  def index
    @users = User.all

    @users = @users.map do |u| 
      @fullUserInfo = u.attributes
      @fullUserInfo.update({:reviews => u.reviews})
      @fullUserInfo.update({:listings => u.listings})
      @fullUserInfo.update({:wishes => u.wishes})
      @fullUserInfo.update({:proposals => u.proposals})
    end

    render json: @users
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
