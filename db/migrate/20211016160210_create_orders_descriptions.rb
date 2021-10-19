class CreateOrdersDescriptions < ActiveRecord::Migration[6.1]
  def change
    create_table :orders_descriptions do |t|
      t.integer :order_id
      t.integer :item_id
      t.integer :quantity

      t.timestamps
    end
    add_index :orders_descriptions, :order_id
    add_index :orders_descriptions, :item_id
    add_index :orders, :user_id
  end
end
