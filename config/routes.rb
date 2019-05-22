Rails.application.routes.draw do
  # Application routes
  root "pages#index"

  get "sign-in", to: "sessions#new", as: :sign_in

  # API routes
  namespace :api do
    namespace :v1 do
      resources :sessions, only: [:create]
    end
  end
end
