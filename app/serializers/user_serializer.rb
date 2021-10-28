class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name
  belongs_to :order
end
