class Api::AcceptedProposalsController < ApplicationController
  def show
    # Do we need to query base on is_accepted?
    @accepted_proposal = Assets_For_Trade_Proposal.find(params[:id])
  end
end
