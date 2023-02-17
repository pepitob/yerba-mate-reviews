class Brand < ApplicationRecord
  validates :name, presence: true

  has_many :yerbas

  def country_code
    country_code = case self.country.downcase
    when "argentina"
      "ar"
    when "uruguay"
      "uy"
    when "brazil"
      "br"
    when "paraguay"
      "py"
    else
      "🗺"
    end
  end
end
