class CreateWishlistAssets < ActiveRecord::Migration[5.2]
  def change
    create_table :wishlist_assets do |t|
    t.references :users, null: false, foreign_key: true
    t.references :categories, null: false, foreign_key: true
    t.string :name
    end
  end
end
