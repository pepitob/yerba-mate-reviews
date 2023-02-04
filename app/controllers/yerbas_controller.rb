class YerbasController < ApplicationController
  def new
    @yerba = Yerba.new
  end

  def create
    @yerba = Yerba.new(yerba_params)
    @yerba.save
    redirect_to root_path
  end

  def show
    @yerba = Yerba.find(params[:id])
  end

  private

  def yerba_params
    params.require(:yerba).permit(:name, :brand_id, :country, :category, :description, :photo)
  end
end
