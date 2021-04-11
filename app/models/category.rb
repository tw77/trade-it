class Category < ActiveRecord::Base
# class Category < ApplicationRecord
  validates :name, presence: true

  has_many :assets
  has_many :wishlist_assets

end