class Api::WishesController < ApplicationController
  def index
    @wishes = Wish.where(:user_id => params[:user_id])
    # working
    render json: @wishes
  end

  def create
    @wish = Wish.new(wish_params)
  end

  def destroy
    @wish = Wish.find params[:id]
    @wish.destroy
    
  end

  private

  def wish_params
    params.require(:wish).permit(
      :name,
      :user_id,
      :category_id
    )
  end

end

