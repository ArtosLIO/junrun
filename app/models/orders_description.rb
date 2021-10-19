class OrdersDescription < ApplicationRecord

  validates :quantity, { numericality: {greater_than: 0, allow_nil: false} }

  belongs_to :item
  belongs_to :order

end
