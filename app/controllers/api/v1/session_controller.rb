class Api::V1::SessionController < ApplicationController
    def login
        
        user = User.find_by(email: params[:user][:email])
        if user && user.authenticate(params[:user][:password])
            render json: user, status: 200
        else
            render json: {error: true, error_msg: 'Email or password incorect'}
        end

    end
end
