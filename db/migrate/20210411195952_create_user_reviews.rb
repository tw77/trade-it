class CreateUserReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :user_reviews do |t|
      t.text :review
      t.integer :rating
      t.references :reviewer_user, foreign_key:{ to_table: :users }
      t.references :reviewed_user, foreign_key:{ to_table: :users }
    end
  end
end
