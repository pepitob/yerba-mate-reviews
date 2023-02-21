class FavouritesController < ApplicationController
  def create
    @yerba = Yerba.find(params[:yerba_id])
    @favourite = Favourite.create(yerba: @yerba, user: current_user)
    redirect_to yerba_path(@yerba)
  end

  def destroy
    @yerba = Yerba.find(params[:yerba_id])
    @user = User.find(params[:user_id])
    @favourite = Favourite.find_by(yerba: @yerba, user: @user)
    @favourite.destroy
    redirect_to yerba_path(@yerba)
  end
end
