Rails.application.routes.draw do
  devise_for :users
  root to: "pages#home"
  get '/blog' => redirect("https://bestyerbamate.co/blog/", status: 301)
  resources :brands do
    resources :yerbas
  end
end
