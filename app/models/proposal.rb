class Proposal < ApplicationRecord
  belongs_to :listing
  belongs_to :user
  belongs_to :asset
  belongs_to :status

  validates :listing_id, presence: true
  validates :user_id, presence: true
  validates :asset_id, presence: true
  validates :status_id, presence: true

end