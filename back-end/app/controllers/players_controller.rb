class PlayersController < ApplicationController
    def index 
        players = Player.all
        render json: players
    end 

    def show 
        player = Player.find_by(id: params[:id])
        render json: player
    end 
end
