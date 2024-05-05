import { Choice } from "../../models/choice.enum";
import { roundActions } from "./round.actions";
import { initialState, roundReducer } from "./round.reducer";

describe('matchReducer', () => {

    it('should set the player one choice', () => {
        expect(roundReducer(initialState, roundActions.setPlayerOneChoice({
            playerOneChoice: Choice.PAPER
        }))).toEqual({
            ...initialState,
            playerOneChoice: Choice.PAPER,
        });
    });

    it('should set the player two choice', () => {
        expect(roundReducer(initialState, roundActions.setPlayerTwoChoice({
            playerTwoChoice: Choice.ROCK
        }))).toEqual({
            ...initialState,
            playerTwoChoice: Choice.ROCK,
        });
    });
});