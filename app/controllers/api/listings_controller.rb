class Api::ListingsController < ApplicationController

  def create
    @listing = Listing.new(listing_params)
  end
  
  def index
    @listings = Listing.all
    # working
    render json: @listings
  end

  def show
    @listing = Listing.find params[:id]
    # working
    render json: @listing
  end

  def update
    @listing = Listing.find params[:id]
    # not sure if we need to include the table columns to be updated
    @listing.update
    # attributes = listing_params.clone
    # (conditional logic for updating here?)
    # listing.update_attributes(attributes)
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


# user = User.find_by(name: 'David')
# user.update(name: 'Dave')