class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name
      t.string :description
      t.float :price
      t.integer :quantity
      t.string :section
      t.string :category_name
      # t.integer :user_id

      t.timestamps
    end
  end
end
