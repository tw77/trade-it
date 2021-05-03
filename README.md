# Trade It

A mobile app for trading items you no longer need for items and services you want. Don't buy, just trade it and help create a more sustainable future.<br/><br/>
This was a collaboration with Judit Mendez Puig [@judeIt](https://github.com/judeIt) for our final project in the Lighthouse Labs Web Development bootcamp. The app is inspired by the story of Kyle MacDonald, a Canadian blogger who famously bartered his way from "one red paperclip" to a house in a sequence of online trades.<br/><br/>
Back-end: Ruby on Rails, PostgreSQL. <br/>
Front-end: React, CSS, Material UI, Ant Design.<br/>

### My contribution
- We pair-programmed the Rails back-end and the database setup.
- I implemented the functionality in the front-end with React, including accessing data and updating state. 
- I implemented navigation in the app, making use of React Router and a couple of its hooks (useHistory and useParams).

## A preview

  #### Browse and search for listings
  <img src="docs/01_Browse_and_search_for_items.gif" width="300"/>

  #### View a particular listing
  <img src="docs/02_Go_particular_listing.gif" width="300"/>

  #### View a user's profile, listings and reviews
  <img src="docs/03_Go_user_profile.gif" width="300"/><br /><br />

  #### Propose a trade
  <img src="docs/04_Propose_trade.gif" width="300"/><br /><br />

  #### Manage proposals
  <img src="docs/05_Proposals_tab.gif" width="300"/><br /><br />

  #### Wishlist
  <img src="docs/06_Wishlist_tab.gif" width="300"/><br /><br />

  #### Add a new listing
  <img src="docs/07_New_listing.gif" width="300"/><br /><br />

  #### Suggestions
  <img src="docs/08_Suggestions.png" width="300"/><br /><br />


## Setup
1. Fork this repository, then clone your fork of this repository.
2. In one terminal, run `bundle` to install the dependencies. Run `bin/rake db:setup` to create the databases (called rails_project_development). Run `bin/rails s` to run the server.
3. In the other terminal, `cd` into `client`. Run `npm install`. Then run `npm start`.
4. Go to `localhost:3000` in your browser.
