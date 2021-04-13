class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    # working
    render json: @user  
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to '/'
    else
      # When we render we can see the error messages, because we render the : new template with the @user
      render :new
    end
  end

  def update
    @user = User.find params[:id]
    @user.update
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :phone, :profile_picture, :bio, :province, :city, :neighbourhood, :password, :password_confirmation)
  end
end
