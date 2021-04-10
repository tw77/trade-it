class CreateNeighbourhoods < ActiveRecord::Migration[5.2]
  def change
    create_table :neighbourhoods do |t|
    t.references :cities, null: false, foreign_key: true
    t.string :name
    end
  end
end
