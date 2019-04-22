class Api::V1::UsersController < ApplicationController
    def index
        render json: User.all
    end

    def create
        user = User.new(user_params)
        if user.save
            render json: user
        else
            render json: user.errors, status: 400
        end
    end

    private

    def user_params
        params.permit(:name, :email, :password)
    end
end
