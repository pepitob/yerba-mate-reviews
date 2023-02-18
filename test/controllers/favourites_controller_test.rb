require "test_helper"

class FavouritesControllerTest < ActionDispatch::IntegrationTest
  test "should get yerba:references" do
    get favourites_yerba:references_url
    assert_response :success
  end

  test "should get user:references" do
    get favourites_user:references_url
    assert_response :success
  end
end
