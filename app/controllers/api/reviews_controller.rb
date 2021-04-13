class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.where(:user_id => params[:user_id])
    # working
    render json: @reviews 
  end

  def create
    @review = Review.new(review_params)
  end

  private
  
  def review_params
    params.require(:review).permit(
      :review,
      :rating,
      :user_id
    )
  end

end
