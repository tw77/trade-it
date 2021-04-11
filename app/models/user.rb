class User < ApplicationRecord
  has_many :user_reviews, as: :reviewer
  has_many :user_reviews, as: :reviewed
  has_many :listings
  has_many :wishlist_assets
  has_many :assets, as: :owner
  has_many :assets, as: :storer
  has_many :assets_for_trade_proposals

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true
  validates :phone, presence: true
  validates :password, presence: true
  validates :profile_picture, presence: true
  validates :bio, presence: true
  before_save { self.email.downcase!}

end