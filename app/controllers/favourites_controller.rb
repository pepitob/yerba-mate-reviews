class FavouritesController < ApplicationController
  def create
    @yerba = Yerba.find(params[:yerba_id])
    @favourite = Favourite.create(yerba: @yerba, user: current_user)
    redirect_to yerba_path(@yerba)
  end
end
