class CreateCities < ActiveRecord::Migration[5.2]
  def change
    create_table :cities do |t|
    t.references :provinces, null: false, foreign_key: true
    t.string :name
    end
  end
end
