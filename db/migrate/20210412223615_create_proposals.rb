class CreateProposals < ActiveRecord::Migration[5.2]
  def change
    create_table :proposals do |t|
      t.text :message
      t.boolean :is_accepted
      t.datetime :date_accepted
      t.references :listing, foreign_key: true
      t.references :user, foreign_key: true
      t.references :asset, foreign_key: true
      t.references :status, foreign_key: true
    end
  end
end
