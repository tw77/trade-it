class CreateAssets < ActiveRecord::Migration[5.2]
  def change
    create_table :assets do |t|
      t.string :name
      t.text :description
      t.string :picture
      t.references :owner_user, foreign_key: { to_table: :users }
      t.references :storer_user, foreign_key: { to_table: :users }
      t.references :category, foreign_key: true
    end
  end
end
