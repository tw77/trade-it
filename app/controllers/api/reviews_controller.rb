class Api::ReviewsController < ApplicationController
  
  def create
    puts "inspecting the review params..."
    puts review_params.inspect
    @review = Review.create!(review_params)
    # working now
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
      :content
    )
  end

end
