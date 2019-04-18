class Api::V1::CartsController < ApplicationController
    def index
        render json: Cart.all
    end
end
