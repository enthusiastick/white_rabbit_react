Rails.application.routes.draw do
  # Application routes
  root "pages#index"

  get "sign-in", to: "sessions#new", as: :sign_in
end
