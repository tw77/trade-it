class Api::ProfilesController < ApplicationController
  def show
    @listings = Listing.where(:user_id => params[:user_id])
    @reviews = Review.where(:user_id => params[:user_id])
    @user = User.find(params[:user_id])
    # render json: @listings
    # render json: @reviews
    render json: @user
  end

  def update
    @user = User.find params[:id]
    @user.update
  end
end
