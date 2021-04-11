class CreateCities < ActiveRecord::Migration[5.2]
  def change
    create_table :cities do |t|
      t.string :name
      t.references :province, foreign_key: true
    end
  end
end
