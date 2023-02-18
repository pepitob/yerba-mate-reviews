Rails.application.routes.draw do
  get 'favourites/yerba:references'
  get 'favourites/user:references'
  devise_for :users
  root to: "pages#home"
  get '/blog' => redirect("https://bestyerbamate.co/blog/", status: 301)
  resources :brands
  resources :yerbas
end
