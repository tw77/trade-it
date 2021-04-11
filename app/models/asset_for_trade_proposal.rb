class Asset_For_Trade_Proposal < ApplicationRecord
  belongs_to :listing
  belongs_to :user
  belongs_to :asset
  belongs_to :status

  validates :listings_id, presence: true
  validates :users_id, presence: true
  validates :assets_id, presence: true
  validates :statuses_id, presence: true

end