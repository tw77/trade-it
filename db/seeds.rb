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
  phone: "604-777-8888",
  password: "alice",
  bio: "Hey, I'm looking to make some trades. I love video games.",
  profile_picture: "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2VsZmllfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
})

user2 = neighbourhood1.users.find_or_create_by!({
  first_name: "Judit",
  last_name: "Mendez",
  email: "mendez.puig@gmail.com",
  phone: "236-888-8525",
  password: "judit",
  bio: "I'm Judit and I love coding. I have some cameras that I wanna trade.",
  profile_picture: "https://i.imgur.com/SD0t7YG.jpeg"
})

user3 = neighbourhood1.users.find_or_create_by!({
  first_name: "Jenny",
  last_name: "McDonald",
  email: "jennymcdonald@gmail.com",
  phone: "778-999-5555",
  password: "jenny",
  bio: "Hi, I'm Jenny",
  profile_picture: "https://images.unsplash.com/photo-1609902726285-00668009f004?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
})

user4 = neighbourhood5.users.find_or_create_by!({
  first_name: "Edward",
  last_name: "Jones",
  email: "edward@jones.com",
  phone: "604-456-7890",
  password: "edward",
  bio: "Hi, I'm Edward and I'm passionate about dogs.",
  profile_picture: "https://images.unsplash.com/photo-1598262088246-2b1a35324c83?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzgzfHxzZWxmaWV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
})
user5 = neighbourhood5.users.find_or_create_by!({
  first_name: "Daniel",
  last_name: "K.",
  email: "daniel@k.com",
  phone: "604-111-2222",
  password: "daniel",
  bio: "Hi, I'm Daniel and I'm originally from Australia. I want to furnish my new apartment in Mount Plesant.",
  profile_picture: "https://images.unsplash.com/photo-1601724373327-8d3d925e43a2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjAyfHxzZWxmaWV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
})
user6 = neighbourhood5.users.find_or_create_by!({
  first_name: "Aly",
  last_name: "L.",
  email: "aly@l.com",
  phone: "778-444-1234",
  password: "aly",
  bio: "Hi, I'm Aly and I love books.",
  profile_picture: "https://images.unsplash.com/photo-1547625249-06e8c613f229?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzkzfHxzZWxmaWV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
})
user7 = neighbourhood7.users.find_or_create_by!({
  first_name: "Amy",
  last_name: "L.",
  email: "amy@l.com",
  phone: "778-109-9999",
  password: "amy",
  bio: "Hi, I'm Amy and I love plants.",
  profile_picture: "https://images.unsplash.com/photo-1608716987742-7a5d6149ab5f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjg3fHxzZWxmaWV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
})
user8 = neighbourhood17.users.find_or_create_by!({
  first_name: "Thomas",
  last_name: "W.",
  email: "thomas@m.com",
  phone: "778-555-8970",
  password: "thomas",
  bio: "Hi, I'm Thomas, I'm a web developer from Vancouver.",
  profile_picture: "https://i.imgur.com/uzVA4jZ.jpg"
})
user9 = neighbourhood7.users.find_or_create_by!({
  first_name: "Lucy",
  last_name: "Evans",
  email: "lucy@evans.com",
  phone: "778-222-8678",
  password: "lucy",
  bio: "Hi, I'm Lucy and I like yoga.",
  profile_picture: "https://images.unsplash.com/photo-1595951960408-a7259baee032?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fHNlbGZpZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
})

user10 = neighbourhood1.users.find_or_create_by!({
  first_name: "Michael",
  last_name: "L.",
  email: "michael@l.com",
  phone: "778-888-1520",
  password: "michael",
  bio: "Hey, I'm Michael and I've lived in Vancouver all my life and I like outdoor activities.",
  profile_picture: "https://images.unsplash.com/photo-1598966739654-5e9a252d8c32?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNlbGZpZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
})


## CATEGORIES

puts "Re-creating Categories ..."

# Category.destroy_all

cat1 = Category.find_or_create_by! name: "Electronics"
cat2 = Category.find_or_create_by! name: "Clothing"
cat3 = Category.find_or_create_by! name: "Accessories"
cat4 = Category.find_or_create_by! name: "Furniture"
cat5 = Category.find_or_create_by! name: "Appliances"
cat6 = Category.find_or_create_by! name: "Sports"
cat7 = Category.find_or_create_by! name: "Bicycles"
cat8 = Category.find_or_create_by! name: "Books"
cat9 = Category.find_or_create_by! name: "Plants"
cat10 = Category.find_or_create_by! name: "Instruments"
cat11 = Category.find_or_create_by! name: "Services"
cat12 = Category.find_or_create_by! name: "Cameras" 



# category 1, 2, 3, 7

## ASSETS

puts "Re-creating Assets ..."

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
  name: "Game Boy Color",
  description: "Old school Game Boy Color with 5 games included. It's working well!",
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
  name: "Bicycle Peugeot fixie",
  description: "Vintage fixie bike very well mantained",
  owner_id: user3.id,
  storer_id: user3.id,
  picture: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
})

asset7 = cat1.assets.find_or_create_by!({
  name: "MacBook Pro 13-inch laptop (2015)",
  description: "Battery replaced, perfectly functional, like-new condition.",
  owner_id: user8.id,
  storer_id: user8.id,
  history: ["https://images.unsplash.com/photo-1556449895-a33c9dba33dd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3VpdGFyfGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", "https://images.pexels.com/photos/4430936/pexels-photo-4430936.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", "https://images.unsplash.com/photo-1483000805330-4eaf0a0d82da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"],
  picture: "https://images.pexels.com/photos/40185/mac-freelancer-macintosh-macbook-40185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
})

asset8 = cat9.assets.find_or_create_by!({
  name: "name",
  owner_id: user7.id,
  storer_id: user7.id,
  picture: "https://images.pexels.com/photos/1302305/pexels-photo-1302305.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
})

asset9 = cat12.assets.find_or_create_by!({
  name: "Nikon 55-200mm lenses (camera)",
  description: "Very good condition",
  owner_id: user3.id,
  storer_id: user3.id,
  picture: "https://images.pexels.com/photos/19671/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
})

asset10 = cat11.assets.find_or_create_by!({
  name: "Dog walking (60 min)",
  owner_id: user5.id,
  storer_id: user5.id,
  picture: "https://images.pexels.com/photos/4148828/pexels-photo-4148828.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
})

asset11 = cat3.assets.find_or_create_by!({
  name: "sunglasses",
  owner_id: user1.id,
  storer_id: user1.id,
  picture: "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
})

asset12 = cat4.assets.find_or_create_by!({
  name: "Stylish outdoor chair",
  description: "Bought used in 2010 -- very comfortable",
  owner_id: user3.id,
  storer_id: user3.id,
  history: ["https://images.unsplash.com/photo-1582661702593-149b3f4f2927?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"],
  picture: "https://images.unsplash.com/photo-1602023039928-7af5a2f000fa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGZ1cm5pdHVyZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
})

asset13 = cat9.assets.find_or_create_by!({
  name: "name",
  owner_id: user1.id,
  storer_id: user1.id,
  picture: "https://images.pexels.com/photos/912396/pexels-photo-912396.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
})

asset14 = cat1.assets.find_or_create_by!({
  name: "name",
  owner_id: user3.id,
  storer_id: user3.id,
  picture: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
})

asset15 = cat7.assets.find_or_create_by!({
  name: "Hybrid bicycle (excellent condition)",
  owner_id: user8.id,
  storer_id: user8.id,
  history: ["https://images.unsplash.com/photo-1597260491619-bab87197869f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nvb3RlcnxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"],
  picture: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmljeWNsZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
})

asset16 = cat4.assets.find_or_create_by!({
  name: "chair",
  owner_id: user1.id,
  storer_id: user1.id,
  picture: "https://images.unsplash.com/photo-1601858865196-cee0b8393812?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEyfHxmdXJuaXR1cmV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
})

asset17 = cat4.assets.find_or_create_by!({
  name: "furniture...",
  owner_id: user3.id,
  storer_id: user3.id,
  picture: "https://images.unsplash.com/photo-1532588213355-52317771cce6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZnVybml0dXJlfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
})

asset18 = cat1.assets.find_or_create_by!({
  name: "Black MacBook Pro mid-2013 laptop",
  description: "I'm switching laptops because I want a bigger screen. I've used this one very lightly",
  owner_id: user10.id,
  storer_id: user10.id,
  picture: "https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
})

asset19 = cat12.assets.find_or_create_by!({
  name: "Polaroid camera",
  owner_id: user2.id,
  storer_id: user2.id,
  description: "Beautifull working camera",
  picture: "https://images.pexels.com/photos/3945349/pexels-photo-3945349.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
})

asset20 = cat3.assets.find_or_create_by!({
  name: "Wooden sunglasses with light-blue lenses",
  owner_id: user3.id,
  storer_id: user3.id,
  history: ["https://images.unsplash.com/photo-1583394838336-acd977736f90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=931&q=80", "https://images.unsplash.com/photo-1558594187-6ac6484bf5d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"],
  picture: "https://images.pexels.com/photos/1362558/pexels-photo-1362558.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
})

asset21 = cat1.assets.find_or_create_by!({
  name: "name",
  picture: "https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  owner_id: user3.id,
  storer_id: user3.id
})

asset22 = cat9.assets.find_or_create_by!({
  name: "Indoor plant",
  owner_id: user3.id,
  storer_id: user3.id,
  history: ["https://images.unsplash.com/photo-1459785704030-654f6c5934a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2847&q=80", "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"],
  picture: "https://images.pexels.com/photos/1084188/pexels-photo-1084188.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
})

asset23 = cat4.assets.find_or_create_by!({
  name: "chair",
  owner_id: user3.id,
  storer_id: user3.id,
  picture: "https://images.unsplash.com/photo-1574070492107-e2e4835031bf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFybWNoYWlyfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
})

asset24 = cat11.assets.find_or_create_by!({
  name: "Cat boarding",
  owner_id: user1.id,
  storer_id: user1.id,
  picture: "https://images.pexels.com/photos/569170/pexels-photo-569170.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
})

asset25 = cat7.assets.find_or_create_by!({
  name: "Bicycle",
  owner_id: user3.id,
  storer_id: user3.id,
  picture: "https://images.unsplash.com/photo-1560799486-f4b726357fcd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGJpa2UlMjBmb3IlMjBzYWxlfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
})

asset26 = cat3.assets.find_or_create_by!({
  name: "sunglasses",
  owner_id: user3.id,
  storer_id: user3.id,
  picture: "https://images.pexels.com/photos/1798665/pexels-photo-1798665.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
})

asset27 = cat4.assets.find_or_create_by!({
  name: "chair",
  owner_id: user3.id,
  storer_id: user3.id,
  picture: "https://images.unsplash.com/photo-1536095615694-dfbad2da5d6a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRlY2slMjBjaGFpcnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
})

asset28 = cat9.assets.find_or_create_by!({
  name: "name",
  owner_id: user1.id,
  storer_id: user1.id,
  picture: "https://images.pexels.com/photos/867481/pexels-photo-867481.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
})

asset29 = cat1.assets.find_or_create_by!({
  name: "ASUS laptop + trackpad",
  description: "You can have both the laptop and the trackpad. Looking for music gear and instruments!",
  owner_id: user10.id,
  storer_id: user10.id,
  picture: "https://images.pexels.com/photos/109371/pexels-photo-109371.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
})

asset30 = cat12.assets.find_or_create_by!({
  name: "Canon 550D with lenses (camera)",
  description: "Makes beutifull pictures and well mantained",
  owner_id: user2.id,
  storer_id: user2.id,
  picture: "https://images.unsplash.com/photo-1499696786230-3ebd9d0d6fd8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
})

asset31 = cat7.assets.find_or_create_by!({
  name: "Fixed-gear bicycle (drop-handle road bike)",
  description: "Used for five years, upgrading now but it's still a great bike.",
  owner_id: user4.id,
  storer_id: user4.id,
  history: ["https://images.unsplash.com/photo-1607606116242-357a0bd4404f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"],
  picture: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
})

asset32 = cat4.assets.find_or_create_by!({
  name: "couch",
  owner_id: user3.id,
  storer_id: user3.id,
  picture: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnVybml0dXJlfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
})

asset33 = cat4.assets.find_or_create_by!({
  name: "chair",
  owner_id: user3.id,
  storer_id: user3.id,
  picture: "https://images.unsplash.com/photo-1616708390049-76b87f8ff376?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
})

asset34 = cat12.assets.find_or_create_by!({
  name: "Fujifilm Vintage camera",
  owner_id: user2.id,
  storer_id: user2.id,
  description: "Beautiful working camera",
  picture: "https://images.pexels.com/photos/1091290/pexels-photo-1091290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
})

asset35 = cat11.assets.find_or_create_by!({
  name: "House painting",
  owner_id: user1.id,
  storer_id: user1.id,
  picture: "https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
})

asset36 = cat9.assets.find_or_create_by!({
  name: "name",
  owner_id: user3.id,
  storer_id: user3.id,
  picture: "https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
})

asset37 = cat3.assets.find_or_create_by!({
  name: "sunglasses",
  owner_id: user3.id,
  storer_id: user3.id,
  picture: "https://images.pexels.com/photos/1669595/pexels-photo-1669595.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
})

asset38 = cat1.assets.find_or_create_by!({
  name: "laptop",
  picture: "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  owner_id: user7.id,
  storer_id: user7.id
})

asset39 = cat1.assets.find_or_create_by!({
  name: "name",
  picture: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  owner_id: user9.id,
  storer_id: user9.id
})

asset40 = cat12.assets.find_or_create_by!({
  name: "Konica Vintage camera",
  owner_id: user2.id,
  storer_id: user2.id,
  description: "Vintage camera. The pictures look amazing!",
  picture: "https://images.pexels.com/photos/433098/pexels-photo-433098.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
})

asset41 = cat4.assets.find_or_create_by!({
  name: "chair",
  owner_id: user3.id,
  storer_id: user3.id,
  picture: "https://images.pexels.com/photos/116915/pexels-photo-116915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
})

asset42 = cat7.assets.find_or_create_by!({
  name: "Bicycle",
  owner_id: user3.id,
  storer_id: user3.id,
  picture: "https://images.pexels.com/photos/1431117/pexels-photo-1431117.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
})


asset43 = cat11.assets.find_or_create_by!({
  name: "Plant watering",
  owner_id: user3.id,
  storer_id: user3.id,
  picture: "https://images.pexels.com/photos/6802972/pexels-photo-6802972.jpeg?cs=srgb&dl=pexels-vlada-karpovich-6802972.jpg&fm=jpg"
})

asset44 = cat12.assets.find_or_create_by!({
  name: "Leica M6 camera",
  description: "Vintage Camera. The pictures look amazing!",
  owner_id: user4.id,
  storer_id: user4.id,
  picture: "https://images.unsplash.com/photo-1519458246479-6acae7536988?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80"
})

asset45 = cat3.assets.find_or_create_by!({
  name: "sunglasses",
  owner_id: user3.id,
  storer_id: user3.id,
  picture: "https://images.pexels.com/photos/147641/pexels-photo-147641.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
})

asset46 = cat12.assets.find_or_create_by!({
  name: "camera Sony A7",
  description: "High quality videos & pictures",
  owner_id: user4.id,
  storer_id: user4.id,
  picture: "https://images.pexels.com/photos/45889/camera-photo-camera-sony-alpha-7-sony-45889.jpeg?cs=srgb&dl=pexels-pixabay-45889.jpg&fm=jpg"
})

asset47 = cat4.assets.find_or_create_by!({
  name: "chair",
  owner_id: user3.id,
  storer_id: user3.id,
  picture: "https://images.pexels.com/photos/106839/pexels-photo-106839.jpeg?cs=srgb&dl=pexels-mike-106839.jpg&fm=jpg"
})


asset48 = cat4.assets.find_or_create_by!({
  name: "furniture...",
  owner_id: user3.id,
  storer_id: user3.id,
  picture: "https://images.pexels.com/photos/3935321/pexels-photo-3935321.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
})

asset49 = cat12.assets.find_or_create_by!({
  name: "Ricoh Vintage camera",
  description: "Not working, just for decorative purposes",
  owner_id: user4.id,
  storer_id: user4.id,
  picture: "https://images.pexels.com/photos/206501/pexels-photo-206501.jpeg?cs=srgb&dl=pexels-pixabay-206501.jpg&fm=jpg"
})

asset50 = cat7.assets.find_or_create_by!({
  name: "Bicycle",
  owner_id: user3.id,
  storer_id: user3.id,
  picture: "https://images.pexels.com/photos/2539400/pexels-photo-2539400.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
})


asset51 = cat9.assets.find_or_create_by!({
  name: "name",
  owner_id: user3.id,
  storer_id: user3.id,
  picture: "https://images.pexels.com/photos/834657/pexels-photo-834657.jpeg?cs=srgb&dl=pexels-lisa-834657.jpg&fm=jpg"
})

asset52 = cat12.assets.find_or_create_by!({
  name: "Cosina Vintage camera",
  description: "Needs to be fix",
  owner_id: user4.id,
  storer_id: user4.id,
  picture: "https://images.pexels.com/photos/1251910/pexels-photo-1251910.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
})

asset53 = cat4.assets.find_or_create_by!({
  name: "name",
  owner_id: user3.id,
  storer_id: user3.id,
  picture: "https://images.unsplash.com/photo-1602023039928-7af5a2f000fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
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

listing6 = user3.listings.find_or_create_by!({
  asset_id: asset6.id,
  price_range_id: price_range3.id
})

listing7 = user8.listings.find_or_create_by!({
  asset_id: asset7.id,
  price_range_id: price_range3.id
})

listing8 = user7.listings.find_or_create_by!({
  asset_id: asset8.id,
  price_range_id: price_range3.id
})

listing9 = user3.listings.find_or_create_by!({
  asset_id: asset9.id,
  price_range_id: price_range3.id
})

listing10 = user5.listings.find_or_create_by!({
  asset_id: asset10.id,
  price_range_id: price_range3.id
})

listing11 = user1.listings.find_or_create_by!({
  asset_id: asset11.id,
  price_range_id: price_range3.id
})

listing12 = user3.listings.find_or_create_by!({
  asset_id: asset12.id,
  price_range_id: price_range3.id
})

listing13 = user1.listings.find_or_create_by!({
  asset_id: asset13.id,
  price_range_id: price_range3.id
})

listing14 = user3.listings.find_or_create_by!({
  asset_id: asset14.id,
  price_range_id: price_range3.id
})

listing15 = user8.listings.find_or_create_by!({
  asset_id: asset15.id,
  price_range_id: price_range3.id
})

listing16 = user1.listings.find_or_create_by!({
  asset_id: asset16.id,
  price_range_id: price_range3.id
})

listing17 = user3.listings.find_or_create_by!({
  asset_id: asset17.id,
  price_range_id: price_range3.id
})

listing18 = user8.listings.find_or_create_by!({
  asset_id: asset18.id,
  price_range_id: price_range3.id
})

listing19 = user2.listings.find_or_create_by!({
  asset_id: asset19.id,
  price_range_id: price_range3.id
})

listing20 = user3.listings.find_or_create_by!({
  asset_id: asset20.id,
  price_range_id: price_range3.id
})

listing21 = user3.listings.find_or_create_by!({
  asset_id: asset21.id,
  price_range_id: price_range3.id
})

listing22 = user3.listings.find_or_create_by!({
  asset_id: asset22.id,
  price_range_id: price_range3.id
})

listing23 = user3.listings.find_or_create_by!({
  asset_id: asset23.id,
  price_range_id: price_range3.id
})

listing24 = user1.listings.find_or_create_by!({
  asset_id: asset24.id,
  price_range_id: price_range3.id
})

listing25 = user3.listings.find_or_create_by!({
  asset_id: asset25.id,
  price_range_id: price_range3.id
})

listing26 = user3.listings.find_or_create_by!({
  asset_id: asset26.id,
  price_range_id: price_range3.id
})

listing27 = user3.listings.find_or_create_by!({
  asset_id: asset27.id,
  price_range_id: price_range3.id
})

listing28 = user1.listings.find_or_create_by!({
  asset_id: asset28.id,
  price_range_id: price_range3.id
})

listing29 = user10.listings.find_or_create_by!({
  asset_id: asset29.id,
  price_range_id: price_range3.id
})

listing30 = user2.listings.find_or_create_by!({
  asset_id: asset30.id,
  price_range_id: price_range3.id
})

listing31 = user3.listings.find_or_create_by!({
  asset_id: asset31.id,
  price_range_id: price_range3.id
})

listing32 = user3.listings.find_or_create_by!({
  asset_id: asset32.id,
  price_range_id: price_range3.id
})

listing33 = user3.listings.find_or_create_by!({
  asset_id: asset33.id,
  price_range_id: price_range3.id
})

listing34 = user2.listings.find_or_create_by!({
  asset_id: asset34.id,
  price_range_id: price_range3.id
})

listing35 = user1.listings.find_or_create_by!({
  asset_id: asset35.id,
  price_range_id: price_range3.id
})

listing36 = user3.listings.find_or_create_by!({
  asset_id: asset36.id,
  price_range_id: price_range3.id
})

listing37 = user3.listings.find_or_create_by!({
  asset_id: asset37.id,
  price_range_id: price_range3.id
})

listing38 = user8.listings.find_or_create_by!({
  asset_id: asset38.id,
  price_range_id: price_range3.id
})

listing39 = user9.listings.find_or_create_by!({
  asset_id: asset39.id,
  price_range_id: price_range3.id
})

listing40 = user2.listings.find_or_create_by!({
  asset_id: asset40.id,
  price_range_id: price_range3.id
})

listing41 = user3.listings.find_or_create_by!({
  asset_id: asset41.id,
  price_range_id: price_range3.id
})

listing42 = user3.listings.find_or_create_by!({
  asset_id: asset42.id,
  price_range_id: price_range3.id
})

listing43 = user3.listings.find_or_create_by!({
  asset_id: asset43.id,
  price_range_id: price_range3.id
})

listing44 = user4.listings.find_or_create_by!({
  asset_id: asset44.id,
  price_range_id: price_range3.id
})

listing45 = user3.listings.find_or_create_by!({
  asset_id: asset45.id,
  price_range_id: price_range3.id
})

listing46 = user4.listings.find_or_create_by!({
  asset_id: asset46.id,
  price_range_id: price_range3.id
})

listing47 = user3.listings.find_or_create_by!({
  asset_id: asset47.id,
  price_range_id: price_range3.id
})

listing48 = user3.listings.find_or_create_by!({
  asset_id: asset48.id,
  price_range_id: price_range3.id
})

listing49 = user4.listings.find_or_create_by!({
  asset_id: asset49.id,
  price_range_id: price_range3.id
})

listing50 = user3.listings.find_or_create_by!({
  asset_id: asset50.id,
  price_range_id: price_range3.id
})

listing51 = user3.listings.find_or_create_by!({
  asset_id: asset51.id,
  price_range_id: price_range3.id
})

listing52 = user4.listings.find_or_create_by!({
  asset_id: asset52.id,
  price_range_id: price_range3.id
})

listing53 = user3.listings.find_or_create_by!({
  asset_id: asset53.id,
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

proposal1 = user2.proposals.find_or_create_by!({
  listing_id: listing4.id,
  asset_id: asset2.id,
  status_id: status3.id,
  is_accepted: true,
  message: "Trade me your headphones for my Game Boy Color?"
})

proposal2 = user2.proposals.find_or_create_by!({
  listing_id: listing9.id,
  asset_id: asset1.id,
  status_id: status1.id,
  message: "Your linen shirt for these 55-200mm lenses?"
})

proposal3 = user1.proposals.find_or_create_by!({
  listing_id: listing3.id,
  asset_id: asset5.id,
  status_id: status3.id,
  is_accepted: true,
  message: "Hey"
})

proposal3 = user3.proposals.find_or_create_by!({
  listing_id: listing1.id,
  asset_id: asset19.id,
  status_id: status1.id,
  is_accepted: false,
  message: "Do you want this shirt?"
})


## WISHES

puts "Re-creating Wishes ..."

wish1 = user1.wishes.find_or_create_by({
  name: "Bluetooth speakers",
  category_id: cat1.id
})

wish2 = user3.wishes.find_or_create_by({
  name: "New laptop",
  category_id: cat1.id
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
  content: "Alice was on time and the tennis rackets she gave me were in great condition"
})

review2 = user2.reviews.find_or_create_by!({  
  rating: 5,
  content: "Judit dropped off her camera at my place minutes after I accepted her trade."
})

review3 = user3.reviews.find_or_create_by!({  
  rating: 4,
  content: "Jenny is very reliable, but the item was quite dirty."
})

review4 = user9.reviews.find_or_create_by!({  
  rating: 1,
  content: "Lucy sold me a guitar that never stays in tune... I took it to a repair shop and they told me the fingerboard is damaged... and she had the audacity to claim that it was in excellent condition... please"
})

review5 = user4.reviews.find_or_create_by!({  
  rating: 5,
  content: "Charlie is great to deal with. It was a very nice experience. I will trade with him again for sure."
})

review6 = user8.reviews.find_or_create_by!({
  rating: 5,
  content: "Thomas was great to deal with, I'd gladly trade with him again."
})

puts "DONE!"




