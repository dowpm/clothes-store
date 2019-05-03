class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :description, :quantity, :section, :created_at, :images_url, :category_name

  # belongs_to :category
  # belongs_to :seller
  # has_many :orders
  # has_many :carts
end
