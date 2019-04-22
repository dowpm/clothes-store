class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :full_name, :seller, :image

  has_one :cart, dependent: :destroy
  has_many :orders
  has_many :ordered_products
  has_many :products
end
