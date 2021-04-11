class Api::WishlistsController < ApplicationController
  def index
    @wishlist = Wishlist_Asset.where(:users_id => params[:users_id])
  end

  def create
    @wishlist_asset = Wishlist_Asset.new(wishlist_asset_params)
  end

  def destroy
    @wishlist_asset = Wishlist_Asset.find params[:id]
    @wishlist_asset.destroy
    
  end

  private

  def wishlist_asset_params
    params.require(:wishlist_asset(
      :name
      :users_id
      :categories_id
    )
  end

end

