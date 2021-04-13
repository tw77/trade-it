class Api::WishlistsController < ApplicationController
  def show
    @wish = Wish.where(:user_id => params[:user_id])
    render json: @wish
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

