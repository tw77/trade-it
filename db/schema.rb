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

ActiveRecord::Schema.define(version: 2021_04_10_184443) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "assets", force: :cascade do |t|
    t.bigint "owner_user_id", null: false
    t.bigint "storer_user_id", null: false
    t.bigint "categories_id"
    t.string "name"
    t.text "description"
    t.string "picture"
    t.index ["categories_id"], name: "index_assets_on_categories_id"
    t.index ["owner_user_id"], name: "index_assets_on_owner_user_id"
    t.index ["storer_user_id"], name: "index_assets_on_storer_user_id"
  end

  create_table "assets_for_trade_proposals", force: :cascade do |t|
    t.bigint "listings_id", null: false
    t.bigint "users_id", null: false
    t.bigint "assets_id", null: false
    t.bigint "statuses_id", null: false
    t.text "message"
    t.boolean "is_accepted"
    t.datetime "date_accepted"
    t.index ["assets_id"], name: "index_assets_for_trade_proposals_on_assets_id"
    t.index ["listings_id"], name: "index_assets_for_trade_proposals_on_listings_id"
    t.index ["statuses_id"], name: "index_assets_for_trade_proposals_on_statuses_id"
    t.index ["users_id"], name: "index_assets_for_trade_proposals_on_users_id"
  end

  create_table "categories", force: :cascade do |t|
    t.string "name"
  end

  create_table "cities", force: :cascade do |t|
    t.bigint "provinces_id", null: false
    t.string "name"
    t.index ["provinces_id"], name: "index_cities_on_provinces_id"
  end

  create_table "listings", force: :cascade do |t|
    t.bigint "users_id", null: false
    t.bigint "assets_id", null: false
    t.bigint "price_ranges_id", null: false
    t.index ["assets_id"], name: "index_listings_on_assets_id"
    t.index ["price_ranges_id"], name: "index_listings_on_price_ranges_id"
    t.index ["users_id"], name: "index_listings_on_users_id"
  end

  create_table "neighbourhoods", force: :cascade do |t|
    t.bigint "cities_id", null: false
    t.string "name"
    t.index ["cities_id"], name: "index_neighbourhoods_on_cities_id"
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
    t.bigint "reviewer_user_id", null: false
    t.bigint "reviewed_user_id", null: false
    t.text "review"
    t.integer "rating"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["reviewed_user_id"], name: "index_user_reviews_on_reviewed_user_id"
    t.index ["reviewer_user_id"], name: "index_user_reviews_on_reviewer_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.bigint "neighbourhoods_id", null: false
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "phone"
    t.string "password"
    t.string "profile_picture"
    t.text "bio"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["neighbourhoods_id"], name: "index_users_on_neighbourhoods_id"
  end

  create_table "wishlist_assets", force: :cascade do |t|
    t.bigint "users_id", null: false
    t.bigint "categories_id", null: false
    t.string "name"
    t.index ["categories_id"], name: "index_wishlist_assets_on_categories_id"
    t.index ["users_id"], name: "index_wishlist_assets_on_users_id"
  end

  add_foreign_key "assets", "categories", column: "categories_id"
  add_foreign_key "assets", "users", column: "owner_user_id"
  add_foreign_key "assets", "users", column: "storer_user_id"
  add_foreign_key "assets_for_trade_proposals", "assets", column: "assets_id"
  add_foreign_key "assets_for_trade_proposals", "listings", column: "listings_id"
  add_foreign_key "assets_for_trade_proposals", "statuses", column: "statuses_id"
  add_foreign_key "assets_for_trade_proposals", "users", column: "users_id"
  add_foreign_key "cities", "provinces", column: "provinces_id"
  add_foreign_key "listings", "assets", column: "assets_id"
  add_foreign_key "listings", "price_ranges", column: "price_ranges_id"
  add_foreign_key "listings", "users", column: "users_id"
  add_foreign_key "neighbourhoods", "cities", column: "cities_id"
  add_foreign_key "user_reviews", "users", column: "reviewed_user_id"
  add_foreign_key "user_reviews", "users", column: "reviewer_user_id"
  add_foreign_key "users", "neighbourhoods", column: "neighbourhoods_id"
  add_foreign_key "wishlist_assets", "categories", column: "categories_id"
  add_foreign_key "wishlist_assets", "users", column: "users_id"
end
