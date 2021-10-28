class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :price
  belongs_to :orders_descriptions
end


# class ItemNewSerializer < ActiveModel::Serializer
#   attributes :name, :price, :description
# end
