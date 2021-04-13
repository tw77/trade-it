class Category < ActiveRecord::Base
  validates :name, presence: true

  has_many :assets, dependent: :destroy
  has_many :wishes, dependent: :destroy

end