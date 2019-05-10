class Api::V1::UsersController < ApplicationController


    def create
        # binding.pry
        user = User.new(user_params)
        if user.save
            render json: user
        else
            render json: {error: true, errors: user.errors.values, keys: user.errors.keys}, status: 400
        end
    end

    private

    def user_params
        params.require(:user).permit(:full_name, :email, :password, :seller, :avatar)
    end
end
