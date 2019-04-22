class Api::V1::UsersController < ApplicationController
    def index
        users = User.all
        render json: users.map { |user|
            if user.avatar.attached?
                user.as_json.merge({ image: url_for(user.avatar) })
            else
                user
            end
          }
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
    
    def set_user
        @user = User.find_by(id: params[:id])
    end

    def user_params
        params.permit(:full_name, :email, :password, :seller, :avatar)
    end
end
