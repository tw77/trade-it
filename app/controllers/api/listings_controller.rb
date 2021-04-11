class Api::ListingsController < ApplicationController
  def index
    @listings = Listing.all.order(created_at: :desc)
  end

  # we have add_listing controller that does that
  # def create

  # end

  def show
    @listing = Listing.find params[:id]
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


  # private
  # 
  # def listing_params
  #   params.require(:listing(
  #     :users_id
  #     :assets_id
  #     :name
  #   )
  # end


end




# user = User.find_by(name: 'David')
# user.update(name: 'Dave')