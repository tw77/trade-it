class Api::ProposalsController < ApplicationController
  
  def show
    @wantedAsset = Asset.find_by(id: 1)
    # params[:asset_id]
    @offeredListing = Asset.find_by(id: 2)
    # params[:listing_id]

    # if you wanted more proposal info, you can do a joins after the find_by
    
    @entireProposal = {
      wanted: @wantedAsset,
      offered: @offeredListing
    }
    render json: @entireProposal
  end


  def index
    @proposals = Proposal.where(:user_id => params[:user_id])

    # @Allproposals.

    # @Allproposals = {
    #   @entireProposal = {
    #   wanted: @wantedAsset,
    #   offered: @offeredListing
    # },
    #   @entireProposal = {
    #     wanted: @wantedAsset,
    #     offered: @offeredListing
    #   }
    # }

    # @listings = Asset.joins(:listing).select('assets.id, assets.name, assets.picture').where(listings: { user_id: params[:user_id] })
    # @proposals = Asset.joins(:listing).
    render json: @proposals


  end

  def create
    @proposal = Proposal.create!(proposal_params)
  end

  def update
    @proposal = Proposal.find params[:id]
    attributes = proposal_params.clone
    @proposal.update_attributes(attributes)
  end

  def destroy
    @proposal = Proposal.find params[:id]
    @proposal.destroy
  end
end

private

  def proposal_params
    params.require(:proposal).permit(
      :listing_id,
      :user_id,
      :asset_id,
      :status_id,
      :message
    )
  end
