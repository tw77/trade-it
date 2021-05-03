class Api::ListingsController < ApplicationController

  def create
    @listing = Listing.create!(listing_params)
  end
  
  def index
    @listings = Asset.joins(:listing).joins(:user)

    @listings = @listings.map do |l| 
      @entireListing = l.attributes
      @entireListing.update({:user => l.user})
      @entireListing.update({:neighbourhood => l.user.neighbourhood})
      @entireListing.update({:city => l.user.neighbourhood.city})
      @entireListing.update({:listing => l.listing})
    end

    render json: @listings
  end

  def show
    @listing = Asset.joins(:listing).where(listings: { asset_id: params[:id] })
    render json: @listing
  end

  def update
    @listing = Listing.find params[:id]
    attributes = listing_params.clone
    @listing.update_attributes(attributes)
  end

  def destroy
    @listing = Listing.find params[:id]
    @listing.destroy
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
