class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :description, :quantity, :section, :created_at, :category_name, :images_url

  belongs_to :category
  belongs_to :seller
  has_many :orders
  has_many :carts
end
