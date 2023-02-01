class YerbasController < ApplicationController
  def new
    @yerba = Yerba.new
  end

  def show
    @yerba = Yerba.find(params[:id])
  end
end
