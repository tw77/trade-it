class CreateNeighbourhoods < ActiveRecord::Migration[5.2]
  def change
    create_table :neighbourhoods do |t|
      t.string :name
      t.references :city, foreign_key: true
    end
  end
end
