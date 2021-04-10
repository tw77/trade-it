class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
    t.references :users, null: false, foreign_key: true
    t.references :assets, null: false, foreign_key: true
    t.references :price_ranges, null: false, foreign_key: true
    end
  end
end
