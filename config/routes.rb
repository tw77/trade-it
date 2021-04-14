Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do # /api/data

    # get '/data', to: 'tests#index'
    
    resources :assets, only: [:create, :update, :destroy]
    resources :listings

    resources :users, only: [:create, :show, :update] do
        resources :profiles, only: [:show, :index]
        resources :wishes, only: [:index, :create, :destroy]
        resources :proposals
        # resource :suggestions
        resources :reviews, only: [:index, :create]
    end

    # these routes are for showing users a login form, logging them in, and logging them out.
    post '/login' => 'sessions#create'
    get '/logout' => 'sessions#destroy'
    get '/signup' => 'users#new'

    post '/users' => 'users#create'

  end
 
  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end
