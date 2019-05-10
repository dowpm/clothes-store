class User < ApplicationRecord

    has_one_attached :avatar, dependent: :destroy
    
    has_secure_password

    validates :email, presence: true, uniqueness: true
    validates :full_name, presence: true
    validates :password, presence: true, length: { in: 6..100 }
end
