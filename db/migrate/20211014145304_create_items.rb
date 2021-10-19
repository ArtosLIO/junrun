class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name,        null: false, default: ''
      t.string :description, null: true
      t.float  :price,       null: true

      t.timestamps
    end
    add_index :items, :name
    add_index :items, :price
  end
end
