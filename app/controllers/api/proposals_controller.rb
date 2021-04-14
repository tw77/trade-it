class Api::ProposalsController < ApplicationController
  
  def show
    # e.g. localhost:3000/api/users/4/proposals/2

    @proposalInfo = Proposal.find(2)
    # params[:proposal_id]

    @entireProposal = @proposalInfo
                      .attributes
                      .update({:wanted => @proposalInfo.asset})
                      .update({:offered => @proposalInfo.listing.asset})
    
    render json: @entireProposal
  end


  def index
    # e.g. localhost:3000/api/users/2/proposals

    @proposals = Proposal.where(:user_id => params[:user_id])

    @proposals = @proposals.map do |p| 
      @entireProposal = p.attributes
      @entireProposal.update({:wanted => p.asset})
      @entireProposal.update({:offered => p.listing.asset})
    end
  
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
