class Status < ApplicationRecord
  has_many :assets_for_trade_proposals

  validates :name, presence: true
end
