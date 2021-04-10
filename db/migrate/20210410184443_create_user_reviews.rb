class CreateUserReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :user_reviews do |t|
    t.references :reviewer_user, null: false, foreign_key: { to_table: :users }
    t.references :reviewed_user, null: false, foreign_key: { to_table: :users }
    t.text :review
    t.integer :rating
  
    t.timestamps null: false 
    end
  end
end
