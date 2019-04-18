class OrderProduct < ApplicationRecord
    belongs_to :order    
    belongs_to :product

    before_save :add_ordered_product_price

    def add_ordered_product_price
        self.price = self.product.price
    end
end
