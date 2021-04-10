class CreatePriceRanges < ActiveRecord::Migration[5.2]
  def change
    create_table :price_ranges do |t|
    t.string :range
    end
  end
end
