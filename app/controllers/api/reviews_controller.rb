class Api::ReviewsController < ApplicationController
  
  def create
    puts "We are in create method Reviews"
    puts "inspecting the review params..."
    puts review_params.inspect
    @review = Review.create!(eval_params)

  end
  
  def index
    @reviews = Review.where(:user_id => params[:user_id])
    # working
    render json: @reviews 
  end

  private
    
  def review_params
    params.require(:review).permit(
      :rating,
      :user_id,
      :review
    )
  end

end
