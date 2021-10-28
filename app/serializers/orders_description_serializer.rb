class OrdersDescriptionSerializer < ActiveModel::Serializer
  attributes :quantity
  has_one :order
  has_one :item
end
