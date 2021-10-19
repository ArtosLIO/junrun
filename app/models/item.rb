class Item < ApplicationRecord
  # attr_accessible :name, :description, :price

  validates :name, presence: true
  validates :description, presence: false
  validates :price, { numericality: { greater_than: 0, allow_nil: true } }

  has_many :orders_descriptions

end
