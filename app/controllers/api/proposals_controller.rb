class Api::ProposalsController < ApplicationController
  
  def show
    @wantedAsset = Asset.find_by(id: 1)
    # params[:asset_id]
    @offeredListing = Asset.find_by(id: 2)
    # params[:listing_id]

    # if we want more proposal info, we can do a joins after the find_by
    
    @entireProposal = {
      wanted: @wantedAsset,
      offered: @offeredListing
    }
    render json: @entireProposal
  end


  def index
    @proposals = Proposal.where(:user_id => params[:user_id])

    @proposals.each { |p| puts p.inspect }
    # for each proposal, find asset_id and listing_id, then do the same as in the show method above
    # return an array of @entireProposal objects


    # this works, for reference....
    # hash = { thing1: 300, thing2: 200 }
    # hash.each { |key,value| puts "#{key} price is #{value}" } 

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
