# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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

Neighbourhood.destroy_all
City.destroy_all
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

city1 = province2.cities.create! name: 'Vancouver'
city2 = province2.cities.create! name: 'Richmond'
city3 = province2.cities.create! name: 'Burnaby'
city4 = province2.cities.create! name: 'Abbotsford'
city5 = province2.cities.create! name: 'Victoria'
city6 = province2.cities.create! name: 'Surrey'
city7 = province2.cities.create! name: 'Kelowna'
city8 = province2.cities.create! name: 'Nanaimo'
city9 = province2.cities.create! name: 'Coquitlam'
city10 = province2.cities.create! name: 'Kamloops'
city11 = province2.cities.create! name: 'Prince Rupert'
city12 = province2.cities.create! name: 'New Westminister'
city13 = province2.cities.create! name: 'Langley City'
city14 = province2.cities.create! name: 'Fort St. John'
city15 = province2.cities.create! name: 'North Vancouver'
city16 = province2.cities.create! name: 'Squamish'
city17 = province2.cities.create! name: 'Penticton'
city18 = province2.cities.create! name: 'Whistler'
city19 = province2.cities.create! name: 'Delta'
city20 = province2.cities.create! name: 'Chilliwack'
city21 = province2.cities.create! name: 'Prince George'
city22 = province2.cities.create! name: 'Port Coquitlam'
city23 = province2.cities.create! name: 'Williams Lake'
city24 = province2.cities.create! name: 'Dawson Creek'
city25 = province2.cities.create! name: 'Vernon'
city26 = province2.cities.create! name: 'White Rock'
city27 = province2.cities.create! name: 'Mission'
city28 = province2.cities.create! name: 'Courtenay'
city29 = province2.cities.create! name: 'Pitt Meadows'
city30 = province2.cities.create! name: 'Salmon Arm'
city31 = province2.cities.create! name: 'Campbell River'
city32 = province2.cities.create! name: 'Port Alberni'

## NEIGHBOURHOODS

puts "Re-creating Neighbourhoods ..."

neighbourhood1 = city1.neighbourhoods.create! name: "West End"
neighbourhood2 = city1.neighbourhoods.create! name: "Strathcona"
neighbourhood3 = city1.neighbourhoods.create! name: "Marpole"
neighbourhood4 = city1.neighbourhoods.create! name: "Yaletown"
neighbourhood5 = city1.neighbourhoods.create! name: "Mount Pleasant"
neighbourhood6 = city1.neighbourhoods.create! name: "Dunbar"
neighbourhood7 = city1.neighbourhoods.create! name: "Kitsilano"
neighbourhood8 = city1.neighbourhoods.create! name: "Point Grey"
neighbourhood9 = city1.neighbourhoods.create! name: "Yaletown"
neighbourhood10 = city1.neighbourhoods.create! name: "Oakridge"
neighbourhood11 = city1.neighbourhoods.create! name: "Shaughnessy"
neighbourhood12 = city1.neighbourhoods.create! name: "Kerrisdale"
neighbourhood13 = city1.neighbourhoods.create! name: "Hastings-Sunrise"
neighbourhood14 = city1.neighbourhoods.create! name: "Downtown Eastside"
neighbourhood15 = city1.neighbourhoods.create! name: "Chinatown"
neighbourhood16 = city1.neighbourhoods.create! name: "Sunset"
neighbourhood17 = city1.neighbourhoods.create! name: "Fairview"
neighbourhood18 = city1.neighbourhoods.create! name: "Gastown"
neighbourhood19 = city1.neighbourhoods.create! name: "Coal Harbour"
neighbourhood20 = city1.neighbourhoods.create! name: "False Creek"






















# ## USERS

# puts "Finding or Creating Users ..."

# user1 = User

# cat1 = Category.find_or_create_by! name: 'Apparel'
# cat2 = Category.find_or_create_by! name: 'Electronics'
# cat3 = Category.find_or_create_by! name: 'Furniture'

# ## PRODUCTS

# puts "Re-creating Products ..."

# Product.destroy_all

# cat1.products.create!({
#   name:  'Men\'s Classy shirt',
#   description: Faker::Hipster.paragraph(4),
#   image: open_asset('apparel1.jpg'),
#   quantity: 10,
#   price: 64.99
# })

# cat1.products.create!({
#   name:  'Women\'s Zebra pants',
#   description: Faker::Hipster.paragraph(4),
#   image: open_asset('apparel2.jpg'),
#   quantity: 18,
#   price: 124.99
# })

# cat1.products.create!({
#   name:  'Hipster Hat',
#   description: Faker::Hipster.paragraph(4),
#   image: open_asset('apparel3.jpg'),
#   quantity: 4,
#   price: 34.49
# })

# cat1.products.create!({
#   name:  'Hipster Socks',
#   description: Faker::Hipster.paragraph(4),
#   image: open_asset('apparel4.jpg'),
#   quantity: 8,
#   price: 25.00
# })

# cat1.products.create!({
#   name:  'Russian Spy Shoes',
#   description: Faker::Hipster.paragraph(4),
#   image: open_asset('apparel5.jpg'),
#   quantity: 8,
#   price: 1_225.00
# })

# cat1.products.create!({
#   name:  'Human Feet Shoes',
#   description: Faker::Hipster.paragraph(4),
#   image: open_asset('apparel6.jpg'),
#   quantity: 82,
#   price: 224.50
# })


# cat2.products.create!({
#   name:  'Modern Skateboards',
#   description: Faker::Hipster.paragraph(4),
#   image: open_asset('electronics1.jpg'),
#   quantity: 40,
#   price: 164.49
# })

# cat2.products.create!({
#   name:  'Hotdog Slicer',
#   description: Faker::Hipster.paragraph(4),
#   image: open_asset('electronics2.jpg'),
#   quantity: 3,
#   price: 26.00
# })

# cat2.products.create!({
#   name:  'World\'s Largest Smartwatch',
#   description: Faker::Hipster.paragraph(4),
#   image: open_asset('electronics3.jpg'),
#   quantity: 32,
#   price: 2_026.29
# })

# cat3.products.create!({
#   name:  'Optimal Sleeping Bed',
#   description: Faker::Hipster.paragraph(4),
#   image: open_asset('furniture1.jpg'),
#   quantity: 320,
#   price: 3_052.00
# })

# cat3.products.create!({
#   name:  'Electric Chair',
#   description: Faker::Hipster.paragraph(4),
#   image: open_asset('furniture2.jpg'),
#   quantity: 2,
#   price: 987.65
# })

# cat3.products.create!({
#   name:  'Red Bookshelf',
#   description: Faker::Hipster.paragraph(4),
#   image: open_asset('furniture3.jpg'),
#   quantity: 0,
#   price: 2_483.75
# })


puts "DONE!"







# List of relations
# Schema |            Name            | Type  |  Owner  
# --------+----------------------------+-------+---------
# public | ar_internal_metadata       | table | vagrant
# public | assets                     | table | vagrant
# public | assets_for_trade_proposals | table | vagrant
# public | categories                 | table | vagrant
# public | cities                     | table | vagrant
# public | listings                   | table | vagrant
# public | neighbourhoods             | table | vagrant
# public | price_ranges               | table | vagrant
# public | provinces                  | table | vagrant
# public | schema_migrations          | table | vagrant
# public | statuses                   | table | vagrant
# public | user_reviews               | table | vagrant
# public | users                      | table | vagrant
# public | wishlist_assets            | table | vagrant
# (14 rows)
