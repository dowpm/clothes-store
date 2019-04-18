class Api::V1::OrdersController < ApplicationController
    def index
        render json: Order.all
    end
end
