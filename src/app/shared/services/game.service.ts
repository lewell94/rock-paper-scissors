import { Injectable } from "@angular/core";
import { Choice } from "../models/choice.enum";
import { NumberOfPlayers } from "../models/number-of-players.enum";

@Injectable({
    providedIn: 'root'
})
export class GameService {

    findWinner(playerOneChoice: Choice | null, playerTwoChoice: Choice | null) {
        if (playerOneChoice === playerTwoChoice) {
            return null;
        }

        if (playerOneChoice === Choice.ROCK) {
            return playerTwoChoice === Choice.PAPER ? 2 : 1;
        }

        if (playerOneChoice === Choice.PAPER) {
            return playerTwoChoice === Choice.SCISSORS ? 2 : 1;
        }

        if (playerOneChoice === Choice.SCISSORS) {
            return playerTwoChoice === Choice.ROCK ? 2 : 1;
        }

        return null;
    }
}