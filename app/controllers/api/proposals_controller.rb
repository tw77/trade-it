class Api::ProposalsController < ApplicationController
  
  def show
    @proposal = Proposal.find params[:id]
    # working
    render json: @proposal
  end

  def index
    @proposals = Proposal.where(:user_id => params[:user_id])
    # working
    render json: @proposals
  end

  def create
    @proposal = Proposal.new(proposal_params)
  end
  
  def update
    @proposal = Proposal.find params[:id]
    # not sure if we need to include the table columns to be updated
    @proposal.update
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
