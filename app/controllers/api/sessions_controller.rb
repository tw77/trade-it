class Api::SessionsController < ApplicationController

  def create
    @user = User.authenticate_with_credentials(params[:email], params[:password])
    
    if @user
      # success logic, log them in
      session[:user_id] = @user.id
      redirect_to '/'
    else
      # failure, render login form
      # redirect_to '/login'
      @error = 'Your email or password is not correct'
      render :new
    end
  end

  def destroy
    session.delete(:user_id)
    redirect_to '/login'
  end
end
