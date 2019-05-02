class Api::V1::ProductsController < ApplicationController
    before_action :set_product, only: [:show, :update]
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
    
    def show
        if @product.images.attached?
            render json: @product.as_json.merge({
                images: @product.images.map {|img| url_for(img)}
            })
        else
            render json: @product
        end
    end

    def update
        if(@product)
            
            @product.images.purge if params[:images]

            if @product.update(product_params)
                if @product.images.attached?
                    render json: @product.as_json.merge({
                        images: @product.images.map {|img| url_for(img)}
                    })
                else
                    render json: @product
                end
            end
        else
            render json: {status: 404, error: 'Product Not found'}
        end
    end

    def create
        product = Product.new(product_params)

        if product.save
            if product.images.attached?
                render json: product.as_json.merge({
                    images: product.images.map {|img| url_for(img)}
                }), status: 201
            else
                render json: product, status: 201
            end
        else
            render json: {error: true}, status: 500
        end
    end

    private

    def set_product
        @product = Product.find_by(id: params[:id])
    end

    def product_params
        params.permit(
            :name, :description, :quantity,
            :section,:category_id,
            :user_id, :price, images: []
        )
    end
end
