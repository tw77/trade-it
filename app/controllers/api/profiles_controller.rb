class Api::ProfilesController < ApplicationController
  def show
    @listings = Listing.where(:users_id => params[:users_id])
    # @listings = Listing.where("key = ?", params[:key])
    @reviews = User_Reviews.find params[:id]
  end

  def update
    @user = User.find params[:id]
    @user.update
  end
end
