Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'listings#index'

  namespace :api do # /api/data

    # get '/data', to: 'tests#index'
    
    resources :listings, only: [:index, :show, :update, :destroy]

    resources :users do
        resource :profile, only: [:show, :create]
        resource :wishlist, only: [:index, :create, :destroy]
        resource :add_listing, only: [:show, :create]
        resources :proposals do 
          resource :accepted_proposal, only: [:show]
        end
        resource :suggestions
    end

    # these routes are for showing users a login form, logging them in, and logging them out.
    get '/login' => 'sessions#new'
    post '/login' => 'sessions#create'
    get '/logout' => 'sessions#destroy'
    get '/signup' => 'users#new'

    post '/users' => 'users#create'

  end
 
  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end
