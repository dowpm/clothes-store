class Order < ApplicationRecord
    belongs_to :user
    has_many :order_products
    has_many :products, through: :order_products
    
    validates :code, presence: true, uniqueness: true
    validates :user_id, presence: true

    def total_price
        products.reduce(0) do |n, product| 
            product.price + n
        end
    end

    def product_price_ordered
        order_products.map do |order_product|
            [order_product.product_id, order_product.price]
        end
    end
end
