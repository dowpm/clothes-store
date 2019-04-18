# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
mac = User.create(email: 'mc@gmail.com', full_name: 'Mac Dowell', password: '11111111', seller: true)
client = User.create(email: 'client@gmail.com', full_name: 'Client 1', password: '11111111', seller: false)
client2 = User.create(email: 'client2@gmail.com', full_name: 'Client 2', password: '11111111', seller: false)

Category.create name: 't-shirts'
Category.create name: 'shirts'
Category.create name: 'jeans'
Category.create name: 'pants'
Category.create name: 'shorts'
Category.create name: 'shoes'
Category.create name: 'dresses'
Category.create name: 'skirts'

dres001 = Product.create name: 'dress001', description: '', price: 80, quantity: 20, section: 'women', category_id: 7, user_id: 1
shirt001 = Product.create name: 'shirt001', description: 'amazing', price: 30, quantity: 10, section: 'men', category_id: 2, user_id: 1

client_cart = Cart.create(user_id: 3)
client_cart.products << shirt001

client2_orders = client2.orders.create(code: '12342314')
client2_orders.products << shirt001
client2_orders.products << dres001

