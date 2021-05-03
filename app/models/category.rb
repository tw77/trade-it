class Category < ActiveRecord::Base
  has_many :assets, dependent: :destroy
  has_many :wishes, dependent: :destroy

  validates :name, presence: true

end