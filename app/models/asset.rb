class Asset < ApplicationRecord
  has_one :listing, dependent: :destroy
  has_many :proposals, dependent: :destroy
  belongs_to :category
  belongs_to :user, foreign_key: :owner_id
  belongs_to :user, foreign_key: :storer_id

  validates :owner_id, presence: true
  validates :storer_id, presence: true
  validates :category_id, presence: true
  validates :name, presence: true
  validates :description, presence: true
  validates :picture, presence: true

end
