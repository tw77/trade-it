class City < ApplicationRecord

  belongs_to :province
  has_many :neighbourhoods, dependent: :destroy
  
  validates :name, presence: true

end
