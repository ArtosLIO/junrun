class Order < ApplicationRecord

  validates :amount, { numericality: { greater_than_or_equal_to: 0, allow_nil: false } }

  belongs_to :user
  has_one :orders_description

end
