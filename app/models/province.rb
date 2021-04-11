class Province < ApplicationRecord
  
  has_many :cities
  
  validates :name, presence: true
end
