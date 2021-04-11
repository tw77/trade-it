class Province < ApplicationRecord
  validates :name, presence: true

  has_many :cities
end
