class Product < ApplicationRecord
    # belongs_to :seller, foreign_key: 'user_id', class_name: 'User'
    # belongs_to :category
    # has_many :order_products
    # has_many :orders, through: :order_products
    # has_many :cart_products
    # has_many :carts, through: :cart_products

    has_many_attached :images, dependent: :destroy

    validates :name, presence: true
    validates :price, presence: true
    # validates :user_id, presence: true
    # validates :category_id, presence: true

    include Rails.application.routes.url_helpers

    def images_url
        if self.images.attached?
            self.images.map {|img|
                rails_blob_path(img, only_path: true)
            }
        else
            return []
        end   
    end

    # def category_name
    #     category.name
    # end

    # def seller_name
    #     seller.full_name
    # end
end
