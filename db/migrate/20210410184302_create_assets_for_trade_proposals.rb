class CreateAssetsForTradeProposals < ActiveRecord::Migration[5.2]
  def change
    create_table :assets_for_trade_proposals do |t|
    t.references :listings, null: false, foreign_key: true
    t.references :users, null: false, foreign_key: true
    t.references :assets, null: false, foreign_key: true
    t.references :statuses, null: false, foreign_key: true
    t.text :message
    t.boolean :is_accepted
    t.datetime :date_accepted
    end
  end
end
