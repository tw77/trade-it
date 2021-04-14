class Api::AssetsController < ApplicationController
  def create
    @asset = Asset.create!(asset_params)
    # working
  end

  def update
    @asset = Asset.find params[:id]
    attributes = asset_params.clone
    @asset.update_attributes(attributes)
    # working
  end

  def destroy
    @asset = Asset.find params[:id]
    @asset.destroy
    # working
  end

  private

  def asset_params
    params.require(:asset).permit(
      :name,
      :description,
      :category_id,
      :owner_id,
      :storer_id,
      :picture
    )
  end
  
end
