class CreateWish < ActiveRecord::Migration[5.2]
  def change
    create_table :wishes do |t|
      t.string :name
      t.references :category, foreign_key: true
      t.references :user, foreign_key: true
    end
  end
end
