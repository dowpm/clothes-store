class Product < ApplicationRecord
    belongs_to :seller, foreign_key: 'user_id', class_name: 'User'
    belongs_to :category
    has_many :order_products
    has_many :orders, through: :order_products
    has_many :cart_products
    has_many :carts, through: :cart_products

    validates :name, presence: true
    validates :price, presence: true
    validates :user_id, presence: true
    validates :category_id, presence: true

    def category_name
        category.name
    end

    def seller_name
        seller.full_name
    end
end
