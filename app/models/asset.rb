class Asset < ApplicationRecord

  belongs_to :category
  belongs_to :owner, polymorphic: true
  belongs_to :storer, polymorphic: true

  validates :owner_user_id, presence: true
  validates :storer_user_id, presence: true
  validates :categories_id, presence: true
  validates :name, presence: true
  validates :description, presence: true
  validates :picture, presence: true

end