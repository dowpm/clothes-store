class User < ApplicationRecord
    has_one :cart, dependent: :destroy
    has_many :orders, dependent: :destroy
    has_many :ordered_products, through: :orders, source: :products
    has_many :products, dependent: :destroy

    has_secure_password

    validates :email, presence: true, uniqueness: true
    validates :full_name, presence: true
    validates :password, presence: true, length: { in: 6..100 }
end
