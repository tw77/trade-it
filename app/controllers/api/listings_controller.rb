class Api::ListingsController < ApplicationController

  def create
    puts "we are in the create method in Listings"
    @listing = Listing.create!(listing_params)
    # working
  end
  
  def index
    @listings = Asset.joins(:listing)
    render json: @listings
    # working
  end

  def show
    @listing = Asset.joins(:listing).where(listings: { asset_id: params[:id] })
    render json: @listing
    # working
  end

  def update
    @listing = Listing.find params[:id]
    attributes = listing_params.clone
    @listing.update_attributes(attributes)
    # working
  end

  def destroy
    @listing = Listing.find params[:id]
    @listing.destroy
    # working
  end

  private

  def listing_params
    params.require(:listing).permit(
      :user_id,
      :asset_id,
      :price_range_id
    )
  end
end
