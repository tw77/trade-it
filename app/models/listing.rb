class Listing < ApplicationRecord
  has_many :proposals, dependent: :destroy
  belongs_to :user
  belongs_to :asset

  validates :user_id, presence: true
  validates :asset_id, presence: true
  validates :price_range_id, presence: true

end