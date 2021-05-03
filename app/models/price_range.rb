class Price_Range< ApplicationRecord
  has_many :listings, dependent: :destroy

  validates :range, presence: true

end