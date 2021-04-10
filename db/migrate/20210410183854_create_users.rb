class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
    t.references :neighbourhoods, null: false, foreign_key: true
    t.string :first_name 
    t.string :last_name 
    t.string :email
    t.string :phone
    t.string :password
    t.string :profile_picture
    t.text :bio
      
    t.timestamps null: false
    end
  end
end
