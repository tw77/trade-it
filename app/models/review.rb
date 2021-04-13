class Review < ApplicationRecord
  belongs_to :user

  validates :review, presence: true
  validates :rating, presence: true

end