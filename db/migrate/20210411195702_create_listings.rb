class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.references :user, foreign_key: true
      t.references :asset, foreign_key: true
      t.references :price_range, foreign_key: true
    end
  end
end
