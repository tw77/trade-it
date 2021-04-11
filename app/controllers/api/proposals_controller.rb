class Api::ProposalsController < ApplicationController
  
  
  def show
    @proposal = Assets_For_Trade_Proposal.find params[:id]
    # render json: @proposal
  end

  def index
    @proposals = Assets_For_Trade_Proposal.where(:users_id => params[:users_id])
    # render json: @proposals
  end

  def create
    @proposal = Assets_For_Trade_Proposal.new(proposal_params)
  end
  
  def update
    @proposal = Assets_For_Trade_Proposal.find params[:id]
    # not sure if we need to include the table columns to be updated
    @proposal.update
  end

  def destroy
    @proposal = Assets_For_Trade_Proposal.find params[:id]
    @proposal.destroy
  end
end

private

  def proposal_params
    params.require(:proposal).permit(
      :listings_id,
      :users_id,
      :assets_id,
      :statuses_id,
      :message
    )
  end

  


#  assets_for_trade_proposals
#  id | listings_id | users_id | assets_id | statuses_id | message | is_accepted | date_accepted 
# ----+-------------+----------+-----------+-------------+---------+-------------+---------------
# 