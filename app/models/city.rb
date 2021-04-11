class City < ApplicationRecord

  belongs_to :province
  has_many :neighbourhoods

  validates :name, presence: true

end
