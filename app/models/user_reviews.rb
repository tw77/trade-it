class User_Review < ApplicationRecord
  belongs_to :reviewer, polymorphic: true
  belongs_to :reviewed, polymorphic: true

  validates :reviewer_user_id, presence: true
  validates :reviewed_user_id, presence: true
  validates :review, presence: true
  validates :rating, presence: true

end