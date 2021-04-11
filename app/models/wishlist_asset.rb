class Wishlist_Asset < ApplicationRecord
  belongs_to :user
  belongs_to :category

  validates :users_id, presence: true
  validates :categories_id, presence: true
  validates :name, presence: true

end