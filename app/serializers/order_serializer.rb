class OrderSerializer < ActiveModel::Serializer
  attributes :id, :amount
  has_one :user
  belongs_to :orders_description

  class UserSerializer < ActiveModel::Serializer
    attributes :first_name, :last_name
  end
end
