class Listing < ApplicationRecord

  belongs_to :user

  validates :users_id, presence: true
  validates :assets_id, presence: true
  validates :price_ranges_id, presence: true

end