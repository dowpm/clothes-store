class OrderSerializer < ActiveModel::Serializer
  attributes :id, :total_price, :code, :user_id, :product_price_ordered

  belongs_to :user
  has_many :order_products
  has_many :products
end
