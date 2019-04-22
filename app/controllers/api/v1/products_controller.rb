class Api::V1::ProductsController < ApplicationController
    def index
        @products = Product.all
        render json: @products.map {|product|
            if product.images
                product.as_json.merge({
                    images: product.images.map {|img| url_for(img)}
                })
            else
                product
            end
        }
    end

    private

    def set_product
        @product = Product.find_by(id: params[:id])
    end

    def product_params
        params.permit(:full_name, :email, :password, :seller, images: [])
    end
end
