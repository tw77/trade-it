class Neighbourhood < ApplicationRecord

  belongs_to :city

  has_many :users, dependent: :destroy

  validates :name, presence: true
end
