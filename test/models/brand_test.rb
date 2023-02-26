require "test_helper"

class BrandTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  test "returns correct country code for Argentina" do
    brand = Brand.new(name: "Rosamonte", description: "A classic Argentine yerba mate", country: "Argentina", logo_url: "https://example.com/brands/rosamonte.png")
    assert_equal "ar", brand.country_code
  end

  test "returns correct country code for Uruguay" do
    brand = Brand.new(name: "Canarias", description: "A popular Uruguayan yerba mate", country: "Uruguay", logo_url: "https://example.com/brands/canarias.png")
    assert_equal "uy", brand.country_code
  end

  test "returns correct country code for Brazil" do
    brand = Brand.new(name: "Mate Leão", description: "A popular Brazilian yerba mate", country: "Brazil", logo_url: "https://example.com/brands/mate_leao.png")
    assert_equal "br", brand.country_code
  end

  test "returns correct country code for Paraguay" do
    brand = Brand.new(name: "Pajarito", description: "A classic Paraguayan yerba mate", country: "Paraguay", logo_url: "https://example.com/brands/pajarito.png")
    assert_equal "py", brand.country_code
  end

  test "returns 🗺 for unknown country" do
    brand = Brand.new(name: "Unknown Brand", description: "A mysterious yerba mate", country: "Mars", logo_url: "https://example.com/brands/unknown.png")
    assert_equal "🗺", brand.country_code
  end
end
