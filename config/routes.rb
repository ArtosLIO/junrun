Rails.application.routes.draw do

  devise_scope :user do
    get 'users/list' => 'users/sessions#index'
    get 'user/:id' => 'users/sessions#show', as: "show_user"
    put 'user/:id' => 'users/sessions#update', as: "update_user"
  end
  devise_for :users

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :order
  resources :item
  get '/', to: 'item#index'

end
