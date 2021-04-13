# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.find_or_create_by([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.find_or_create_by(name: 'Luke', movie: movies.first)

puts "Seeding Data ..."

# Helper functions
def open_asset(file_name)
  File.open(Rails.root.join('db', 'seed_assets', file_name))
end

# Only run on development (local) instances not on production, etc.
unless Rails.env.development?
  puts "Development seeds only (for now)!"
  exit 0
end

# Let's do this ...


## PROVINCES

puts "Finding or Creating Provinces ..."

Province.destroy_all

province1 = Province.find_or_create_by! name: 'Alberta'
province2 = Province.find_or_create_by! name: 'British Columbia'
province3 = Province.find_or_create_by! name: 'Manitoba'
province4 = Province.find_or_create_by! name: 'New Brunswick'
province5 = Province.find_or_create_by! name: 'Newfoundland and Labrador'
province6 = Province.find_or_create_by! name: 'Northwest Territories'
province7 = Province.find_or_create_by! name: 'Nova Scotia'
province8 = Province.find_or_create_by! name: 'Nunavut'
province9 = Province.find_or_create_by! name: 'Ontario'
province10 = Province.find_or_create_by! name: 'Prince Edward Island'
province11 = Province.find_or_create_by! name: 'Quebec'
province12 = Province.find_or_create_by! name: 'Saskatchewan'
province13 = Province.find_or_create_by! name: 'Yukon'


## CITIES

puts "Re-creating Cities ..."

city1 = province2.cities.find_or_create_by! name: 'Vancouver'
city2 = province2.cities.find_or_create_by! name: 'Richmond'
city3 = province2.cities.find_or_create_by! name: 'Burnaby'
city4 = province2.cities.find_or_create_by! name: 'Abbotsford'
city5 = province2.cities.find_or_create_by! name: 'Victoria'
city6 = province2.cities.find_or_create_by! name: 'Surrey'
city7 = province2.cities.find_or_create_by! name: 'Kelowna'
city8 = province2.cities.find_or_create_by! name: 'Nanaimo'
city9 = province2.cities.find_or_create_by! name: 'Coquitlam'
city10 = province2.cities.find_or_create_by! name: 'Kamloops'
city11 = province2.cities.find_or_create_by! name: 'Prince Rupert'
city12 = province2.cities.find_or_create_by! name: 'New Westminister'
city13 = province2.cities.find_or_create_by! name: 'Langley City'
city14 = province2.cities.find_or_create_by! name: 'Fort St. John'
city15 = province2.cities.find_or_create_by! name: 'North Vancouver'
city16 = province2.cities.find_or_create_by! name: 'Squamish'
city17 = province2.cities.find_or_create_by! name: 'Penticton'
city18 = province2.cities.find_or_create_by! name: 'Whistler'
city19 = province2.cities.find_or_create_by! name: 'Delta'
city20 = province2.cities.find_or_create_by! name: 'Chilliwack'
city21 = province2.cities.find_or_create_by! name: 'Prince George'
city22 = province2.cities.find_or_create_by! name: 'Port Coquitlam'
city23 = province2.cities.find_or_create_by! name: 'Williams Lake'
city24 = province2.cities.find_or_create_by! name: 'Dawson Creek'
city25 = province2.cities.find_or_create_by! name: 'Vernon'
city26 = province2.cities.find_or_create_by! name: 'White Rock'
city27 = province2.cities.find_or_create_by! name: 'Mission'
city28 = province2.cities.find_or_create_by! name: 'Courtenay'
city29 = province2.cities.find_or_create_by! name: 'Pitt Meadows'
city30 = province2.cities.find_or_create_by! name: 'Salmon Arm'
city31 = province2.cities.find_or_create_by! name: 'Campbell River'
city32 = province2.cities.find_or_create_by! name: 'Port Alberni'

## NEIGHBOURHOODS

puts "Re-creating Neighbourhoods ..."

neighbourhood1 = city1.neighbourhoods.find_or_create_by! name: "West End"
neighbourhood2 = city1.neighbourhoods.find_or_create_by! name: "Strathcona"
neighbourhood3 = city1.neighbourhoods.find_or_create_by! name: "Marpole"
neighbourhood4 = city1.neighbourhoods.find_or_create_by! name: "Yaletown"
neighbourhood5 = city1.neighbourhoods.find_or_create_by! name: "Mount Pleasant"
neighbourhood6 = city1.neighbourhoods.find_or_create_by! name: "Dunbar"
neighbourhood7 = city1.neighbourhoods.find_or_create_by! name: "Kitsilano"
neighbourhood8 = city1.neighbourhoods.find_or_create_by! name: "Point Grey"
neighbourhood9 = city1.neighbourhoods.find_or_create_by! name: "Yaletown"
neighbourhood10 = city1.neighbourhoods.find_or_create_by! name: "Oakridge"
neighbourhood11 = city1.neighbourhoods.find_or_create_by! name: "Shaughnessy"
neighbourhood12 = city1.neighbourhoods.find_or_create_by! name: "Kerrisdale"
neighbourhood13 = city1.neighbourhoods.find_or_create_by! name: "Hastings-Sunrise"
neighbourhood14 = city1.neighbourhoods.find_or_create_by! name: "Downtown Eastside"
neighbourhood15 = city1.neighbourhoods.find_or_create_by! name: "Chinatown"
neighbourhood16 = city1.neighbourhoods.find_or_create_by! name: "Sunset"
neighbourhood17 = city1.neighbourhoods.find_or_create_by! name: "Fairview"
neighbourhood18 = city1.neighbourhoods.find_or_create_by! name: "Gastown"
neighbourhood19 = city1.neighbourhoods.find_or_create_by! name: "Coal Harbour"
neighbourhood20 = city1.neighbourhoods.find_or_create_by! name: "False Creek"

## USERS

puts "Re-creating Users ..."


user1 = neighbourhood1.users.find_or_create_by!({
  first_name: "Alice",
  last_name: "K.",
  email: "alice@k.com",
  phone: "604-xxx-xxxx",
  password: "alice",
  bio: "Hey, I'm looking to make some trades. I love video games.",
  profile_picture: "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
})

user2 = neighbourhood1.users.find_or_create_by!({
  first_name: "Michael",
  last_name: "L.",
  email: "michael@l.com",
  phone: "778-xxx-xxx",
  password: "michael",
  bio: "Hey, I'm Michael and I've live in Vancouver all my life and I like outdoor activities.",
  profile_picture: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
})

user3 = neighbourhood1.users.find_or_create_by!({
  first_name: "Jenny",
  last_name: "McDonald",
  email: "jennymcdonald@gmail.com",
  phone: "778-xxx-xxx",
  password: "jenny",
  bio: "Hi, I'm Jenny",
  profile_picture: "https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
})

user4 = neighbourhood5.users.find_or_create_by!({
  first_name: "Charlie",
  last_name: "Brown",
  email: "charlie@brown.com",
  phone: "604-xxx-xxx",
  password: "charlie",
  bio: "Hi, I'm Charlie and I'm passionate about photography and vintage cameras.",
  profile_picture: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
})
user5 = neighbourhood5.users.find_or_create_by!({
  first_name: "Daniel",
  last_name: "K.",
  email: "daniel@k.com",
  phone: "604-xxx-xxx",
  password: "daniel",
  bio: "Hi, I'm Daniel and I'm originally from Australia. I want to furnish my new apartment in Mount Plesant.",
  profile_picture: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
})
user6 = neighbourhood5.users.find_or_create_by!({
  first_name: "Aly",
  last_name: "L.",
  email: "aly@l.com",
  phone: "778-xxx-xxx",
  password: "aly",
  bio: "Hi, I'm Aly and I love books.",
  profile_picture: "https://images.pexels.com/photos/7218222/pexels-photo-7218222.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
})
user7 = neighbourhood7.users.find_or_create_by!({
  first_name: "Amy",
  last_name: "L.",
  email: "amy@l.com",
  phone: "778-xxx-xxx",
  password: "amy",
  bio: "Hi, I'm Amy and I love plants.",
  profile_picture: "https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
})
user8 = neighbourhood7.users.find_or_create_by!({
  first_name: "Thomas",
  last_name: "M.",
  email: "thomas@m.com",
  phone: "778-xxx-xxx",
  password: "thomas",
  bio: "Hi, I'm Thomas and I'm a musician.",
  profile_picture: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
})
user9 = neighbourhood7.users.find_or_create_by!({
  first_name: "Lucy",
  last_name: "Evans",
  email: "lucy@evans.com",
  phone: "778-xxx-xxx",
  password: "lucy",
  bio: "Hi, I'm Lucy and I like yoga.",
  profile_picture: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
})


## CATEGORIES

puts "Re-creating Categories ..."

# Category.destroy_all

cat1 = Category.find_or_create_by! name: "Electronics"
cat2 = Category.find_or_create_by! name: "Clothing"
cat3 = Category.find_or_create_by! name: "Books"
cat4 = Category.find_or_create_by! name: "Furniture"
cat5 = Category.find_or_create_by! name: "Appliances"
cat6 = Category.find_or_create_by! name: "Cars"
cat7 = Category.find_or_create_by! name: "Bicycles"
cat8 = Category.find_or_create_by! name: "Carpets"
cat9 = Category.find_or_create_by! name: "Plants"
cat10 = Category.find_or_create_by! name: "Instruments"



## ASSETS

puts "Re-creating Assets ..."

Asset.destroy_all

asset1 = cat2.assets.find_or_create_by!({
  name: "Linen shirt, M",
  description: "Rarely-worn light blue linen shirt, very comfortable",
  owner_id: user3.id,
  storer_id: user3.id,
  picture: "https://images.unsplash.com/photo-1598961942613-ba897716405b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1"
})

asset2 = cat1.assets.find_or_create_by!({
  name: "Sony Over-Ear Noise Cancelling Headphones",
  description: "Noise-canceling headphones working well",
  owner_id: user4.id,
  storer_id: user4.id,
  picture: "https://images.unsplash.com/photo-1548378329-437e1ef34263?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=582&q=80"
})

asset3 = cat1.assets.find_or_create_by!({
  name: "Old school PSone",
  description: "Old school PSone with 9 games included(Tom Raider II, Spider-Man, Mega Man X4, Street Fighter, Gran Turismo, Resident Evil, Tekken 3, Crash Bandicoot, Tony Hawk's Pro Skater 2). It's working well!",
  owner_id: user1.id,
  storer_id: user1.id,
  picture: "https://images.unsplash.com/photo-1551219059-b5f8e7acee56?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
})

asset4 = cat1.assets.find_or_create_by!({
  name: "Old school Game Boy Color",
  description: "Old school Game Boy Color with 5 games included(The Legend of Zelda, Pac-Man, Space Invaders, Star Wars, Top Gear Pocket). It's working well!",
  owner_id: user2.id,
  storer_id: user2.id,
  picture: "https://images.unsplash.com/photo-1525799894461-3cfe39b72d69?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
})

asset5 = cat3.assets.find_or_create_by!({
  name: "Milk and Honey",
  description: "Author: Rupi Kaur",
  owner_id: user2.id,
  storer_id: user2.id,
  picture: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
})

asset6 = cat7.assets.find_or_create_by!({
  name: "Peugeot fixie",
  description: "Vintage fixie bike very well mantained",
  owner_id: user3.id,
  storer_id: user3.id,
  picture: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
})


## PRICE RANGES

puts "Re-creating Price Ranges ..."

# Price_Range.destroy_all

price_range1 = Price_Range.find_or_create_by! range: "$1 to $5"
price_range2 = Price_Range.find_or_create_by! range: "$5 to $10"
price_range3 = Price_Range.find_or_create_by! range: "$10 to $20"
price_range4 = Price_Range.find_or_create_by! range: "$20 to $40"
price_range5 = Price_Range.find_or_create_by! range: "$40 to $60"
price_range6 = Price_Range.find_or_create_by! range: "$60 to $100"
price_range7 = Price_Range.find_or_create_by! range: "$100 to $200"
price_range8 = Price_Range.find_or_create_by! range: "$200 to $300"
price_range9 = Price_Range.find_or_create_by! range: "$300 to $500"
price_range10 = Price_Range.find_or_create_by! range: "$500 to $750"
price_range11 = Price_Range.find_or_create_by! range: "$750 to $1000"
price_range12 = Price_Range.find_or_create_by! range: "$1000 to $2000"
price_range13 = Price_Range.find_or_create_by! range: "$2000 to $3000"
price_range14 = Price_Range.find_or_create_by! range: "$3000 to $4000"
price_range15 = Price_Range.find_or_create_by! range: "$4000 to $5000"
price_range16 = Price_Range.find_or_create_by! range: "$5000 to $6000"
price_range17 = Price_Range.find_or_create_by! range: "$7000 to $8000"
price_range17 = Price_Range.find_or_create_by! range: "$8000 to $9000"
price_range18 = Price_Range.find_or_create_by! range: "$9000 to $10,000"
price_range18 = Price_Range.find_or_create_by! range: "$10,000+"






# LISTINGS

puts "Re-creating Listings ..."


listing1 = user3.listings.find_or_create_by!({
  asset_id: asset1.id,
  price_range_id: price_range4.id
})

listing2 = user4.listings.find_or_create_by!({
  asset_id: asset2.id,
  price_range_id: price_range7.id
})

listing3 = user1.listings.find_or_create_by!({
  asset_id: asset3.id,
  price_range_id: price_range6.id
})

listing4 = user2.listings.find_or_create_by!({
  asset_id: asset4.id,
  price_range_id: price_range6.id
})

listing5 = user2.listings.find_or_create_by!({
  asset_id: asset5.id,
  price_range_id: price_range3.id
})


## STATUSES

puts "Re-creating Statuses ..."

# Status.destroy_all

status1 = Status.find_or_create_by! name: "Pending"
status2 = Status.find_or_create_by! name: "Declined"
status3 = Status.find_or_create_by! name: "Accepted"
status4 = Status.find_or_create_by! name: "Confirmed"
status5 = Status.find_or_create_by! name: "Temporarily Withdrawn"




## ASSETS FOR TRADE PROPOSALS

puts "Re-creating Proposals ..."

proposal1 = user1.proposals.find_or_create_by!({
  listing_id: listing3.id,
  asset_id: asset4.id,
  status_id: status1.id,
  message: "I'm very interested on your Game Boy! I used to have the same one when I was a kid :)"
})

proposal2 = user4.proposals.find_or_create_by!({
  listing_id: listing2.id,
  asset_id: asset1.id,
  status_id: status1.id,
  message: "Hope to hear from you soon!"
})

proposal3 = user3.proposals.find_or_create_by!({
  listing_id: listing1.id,
  asset_id: asset5.id,
  status_id: status3.id,
  is_accepted: true,
  date_accepted: Time.now
})

## WISHES

puts "Re-creating Wishes ..."

wish1 = user1.wishes.find_or_create_by({
  name: "Bluetooth speakers",
  category_id: cat1.id
})

wish2 = user2.wishes.find_or_create_by({
  name: "Running vest",
  category_id: cat2.id
})

wish3 = user3.wishes.find_or_create_by({
  name: "Nice bike",
  category_id: cat7.id
})

wish4 = user4.wishes.find_or_create_by({
  name: "Vintage camera",
  category_id: cat1.id
})

wish5 = user5.wishes.find_or_create_by({
  name: "Dinner table and chairs",
  category_id: cat4.id
})

wish6 = user6.wishes.find_or_create_by({
  name: "Books",
  category_id: cat3.id
})

wish7 = user7.wishes.find_or_create_by({
  name: "Plant",
  category_id: cat9.id
})

wish8 = user8.wishes.find_or_create_by({
  name: "Trumpet",
  category_id: cat10.id
})

wish9 = user9.wishes.find_or_create_by({
  name: "Yoga pants",
  category_id: cat2.id
})


## USER REVIEWS

puts "Re-creating Reviews ..."

review1 = user1.reviews.find_or_create_by!({  
  rating: 5,
  review: "Alice was on time and the tennis rackets she gave me were in great condition"
})

review2 = user2.reviews.find_or_create_by!({  
  rating: 5,
  review: "Michael dropped off his camera at my place minutes after I accepted his trade."
})

review3 = user3.reviews.find_or_create_by!({  
  rating: 4,
  review: "Jenny is very reliable, but the item was quite dirty."
})

review4 = user9.reviews.find_or_create_by!({  
  rating: 1,
  review: "Lucy sold me a guitar that never stays in tune... I took it to a repair shop and they told me the fingerboard is damaged... and she had the audacity to claim that it was in excellent condition... please"
})

review3 = user4.reviews.find_or_create_by!({  
  rating: 5,
  review: "Charlie is great to deal with. It was a very nice experience. I will trade with him again for sure."
})

puts "DONE!"




