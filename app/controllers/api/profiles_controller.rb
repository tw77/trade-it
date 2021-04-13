class Api::ProfilesController < ApplicationController
  def show
    @user = User.find(params[:user_id])
    # working
    render json: @user
  end

  def index
    @listings = Listing.where(:user_id => params[:user_id])
    # working
    render json: @listings
  end

end
