class CreateAssets < ActiveRecord::Migration[5.2]
  def change
    create_table :assets do |t|
    t.references :owner_user, null: false, foreign_key: { to_table: :users }
    t.references :storer_user, null: false, foreign_key: { to_table: :users }
    t.references :categories, foreign_key: true
    t.string :name
    t.text :description
    t.string :picture
    end
  end
end
