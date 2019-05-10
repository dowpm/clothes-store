class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    t.string :email
    t.string :password_digest
    t.string :full_name
    t.boolean :seller, default: false
    
    t.timestamps
  end
end
