class Api::AddListingsController < ApplicationController
  def show  
  end

  def create
    @listing = Listing.new(listing_params)
  end

  private

  def listing_params
    params.require(:listing).permit(
      :users_id,
      :assets_id,
      :price_ranges_id,
    )

end
