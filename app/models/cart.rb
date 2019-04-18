class Cart < ApplicationRecord
    belongs_to :user
    has_many :cart_products, dependent: :destroy
    has_many :products, through: :cart_products

    validates :user_id, presence: true, uniqueness: true
end
