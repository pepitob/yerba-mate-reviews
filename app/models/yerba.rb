class Yerba < ApplicationRecord
  has_one_attached :photo
  belongs_to :brand
  has_many :favourites
  validates :name, presence: true
end
