class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.string :code
      t.integer :user_id

      t.timestamps
    end
  end
end
