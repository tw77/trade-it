class Price_Range< ApplicationRecord

  has_many :listings

  validates :range, presence: true

end