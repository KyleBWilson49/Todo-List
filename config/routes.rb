Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api do
    resources :todo, only: [:index, :show, :create, :destroy, :update]
  end

end
