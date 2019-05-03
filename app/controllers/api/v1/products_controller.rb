class Api::V1::ProductsController < ApplicationController
    before_action :set_product, only: [:show, :update, :destroy]
    def index
        @products = Product.all
        render json: @products
    end
    
    def show
        render json: @product
    end

    def update
        if(@product)
            @product.images.purge if params[:images]

            if @product.update(product_params)
                render json: @product
            else
                render json: {status: 404, error: @product.errors}
            end
        else
            render json: {status: 404, error: 'Product Not found'}
        end
    end

    def create
        product = Product.new(product_params)

        if product.save
            render json: product, status: 201
        else
            render json: {error: true}, status: 500
        end
    end

    def destroy
        if @product
            @product.delete
            render json: {error: false}, status: 200
        else
            render json: {error: true, error_msg: 'Product doesn\'t exist'}, status: 404
        end
    end

    private

    def set_product
        @product = Product.find_by(id: params[:id])
    end

    def product_params
        params.permit(
            :name, :description, :quantity,
            :section,:category_name,
            :price, images: []
        )
    end
end
