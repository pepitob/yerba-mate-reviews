class Yerba < ApplicationRecord
  has_one_attached :photo
  belongs_to :brand
  validates :name, presence: true
end
