class Listing < ApplicationRecord
  belongs_to :user
  belongs_to :asset
  has_many :proposals, dependent: :destroy

  validates :user_id, presence: true
  validates :asset_id, presence: true
  validates :price_range_id, presence: true

end