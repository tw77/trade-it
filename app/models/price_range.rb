class Price_Range< ApplicationRecord

  has_many :listings

  validates :name, presence: true

end