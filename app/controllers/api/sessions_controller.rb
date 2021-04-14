class Api::SessionsController < ApplicationController

  def create
    @user = User.authenticate_with_credentials(params[:email], params[:password])
    
  end

  def destroy
    session.delete(:user_id)
    redirect_to '/login'
  end
end
