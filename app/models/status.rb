class Status < ApplicationRecord
  has_many :proposals, dependent: :destroy

  validates :name, presence: true
end
