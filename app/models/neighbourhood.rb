class Neighbourhood < ApplicationRecord

  belongs_to :city

  has_many :users

  validates :name, presence: true
end
