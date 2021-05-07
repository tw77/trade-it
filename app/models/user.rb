class User < ApplicationRecord
  belongs_to :neighbourhood
  has_many :reviews, dependent: :destroy
  has_many :listings, dependent: :destroy
  has_many :wishes, dependent: :destroy
  has_many :assets, as: :owner, dependent: :destroy
  has_many :assets, as: :storer, dependent: :destroy
  has_many :proposals, dependent: :destroy

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true
  validates :phone, presence: true
  validates :password, presence: true
  validates :profile_picture, presence: true
  validates :bio, presence: true
  before_save { self.email.downcase!}

end