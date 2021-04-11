# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_04_11_195952) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "assets", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.string "picture"
    t.bigint "owner_user_id"
    t.bigint "storer_user_id"
    t.index ["owner_user_id"], name: "index_assets_on_owner_user_id"
    t.index ["storer_user_id"], name: "index_assets_on_storer_user_id"
  end

  create_table "assets_for_trade_proposals", force: :cascade do |t|
    t.text "message"
    t.boolean "is_accepted"
    t.datetime "date_accepted"
    t.bigint "listing_id"
    t.bigint "user_id"
    t.bigint "asset_id"
    t.bigint "status_id"
    t.index ["asset_id"], name: "index_assets_for_trade_proposals_on_asset_id"
    t.index ["listing_id"], name: "index_assets_for_trade_proposals_on_listing_id"
    t.index ["status_id"], name: "index_assets_for_trade_proposals_on_status_id"
    t.index ["user_id"], name: "index_assets_for_trade_proposals_on_user_id"
  end

  create_table "categories", force: :cascade do |t|
    t.string "name"
  end

  create_table "cities", force: :cascade do |t|
    t.string "name"
    t.bigint "province_id"
    t.index ["province_id"], name: "index_cities_on_province_id"
  end

  create_table "listings", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "asset_id"
    t.bigint "price_range_id"
    t.index ["asset_id"], name: "index_listings_on_asset_id"
    t.index ["price_range_id"], name: "index_listings_on_price_range_id"
    t.index ["user_id"], name: "index_listings_on_user_id"
  end

  create_table "neighbourhoods", force: :cascade do |t|
    t.string "name"
    t.bigint "city_id"
    t.index ["city_id"], name: "index_neighbourhoods_on_city_id"
  end

  create_table "price_ranges", force: :cascade do |t|
    t.string "range"
  end

  create_table "provinces", force: :cascade do |t|
    t.string "name"
  end

  create_table "statuses", force: :cascade do |t|
    t.string "name"
  end

  create_table "user_reviews", force: :cascade do |t|
    t.text "review"
    t.integer "rating"
    t.bigint "reviewer_user_id"
    t.bigint "reviewed_user_id"
    t.index ["reviewed_user_id"], name: "index_user_reviews_on_reviewed_user_id"
    t.index ["reviewer_user_id"], name: "index_user_reviews_on_reviewer_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "phone"
    t.string "password"
    t.text "bio"
    t.bigint "neighbourhood_id"
    t.index ["neighbourhood_id"], name: "index_users_on_neighbourhood_id"
  end

  create_table "wishlist_assets", force: :cascade do |t|
    t.string "name"
    t.bigint "category_id"
    t.bigint "user_id"
    t.index ["category_id"], name: "index_wishlist_assets_on_category_id"
    t.index ["user_id"], name: "index_wishlist_assets_on_user_id"
  end

  add_foreign_key "assets", "users", column: "owner_user_id"
  add_foreign_key "assets", "users", column: "storer_user_id"
  add_foreign_key "assets_for_trade_proposals", "assets"
  add_foreign_key "assets_for_trade_proposals", "listings"
  add_foreign_key "assets_for_trade_proposals", "statuses"
  add_foreign_key "assets_for_trade_proposals", "users"
  add_foreign_key "cities", "provinces"
  add_foreign_key "listings", "assets"
  add_foreign_key "listings", "price_ranges"
  add_foreign_key "listings", "users"
  add_foreign_key "neighbourhoods", "cities"
  add_foreign_key "user_reviews", "users", column: "reviewed_user_id"
  add_foreign_key "user_reviews", "users", column: "reviewer_user_id"
  add_foreign_key "users", "neighbourhoods"
  add_foreign_key "wishlist_assets", "categories"
  add_foreign_key "wishlist_assets", "users"
end
