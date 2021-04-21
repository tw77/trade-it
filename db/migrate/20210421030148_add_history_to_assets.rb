class AddHistoryToAssets < ActiveRecord::Migration[5.2]
  def change
    add_column :assets, :history, :text, array: true, default: []
  end
end
