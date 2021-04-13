class Api::ProfilesController < ApplicationController
  def show
    @user = User.find(params[:user_id])
    # working
    render json: @user
  end

  def index
    @listings = Asset.joins(:listing).select('assets.id, assets.name, assets.picture').where(listings: { user_id: params[:user_id] })
    # working
    render json: @listings
  end

end
