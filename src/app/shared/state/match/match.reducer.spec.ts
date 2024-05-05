import { NumberOfPlayers } from "../../models/number-of-players.enum";
import { matchActions } from "./match.actions";
import { initialState, matchReducer } from "./match.reducer";

describe('matchReducer', () => {
    it('should set the number of players state', () => {
        expect(matchReducer(initialState, matchActions.setNumberOfPlayers({
            numberOfPlayers: NumberOfPlayers.TWO
        }))).toEqual({
            ...initialState,
            numberOfPlayers: NumberOfPlayers.TWO,
        });
    });

    it('should set the player one name state', () => {
        expect(matchReducer(initialState, matchActions.setPlayerOneName({
            playerOneName: 'Adam'
        }))).toEqual({
            ...initialState,
            playerOneName: 'Adam',
        });
    });

    it('should set the player two name state', () => {
        expect(matchReducer(initialState, matchActions.setPlayerTwoName({
            playerTwoName: 'Bob'
        }))).toEqual({
            ...initialState,
            playerTwoName: 'Bob',
        });
    });

    it('should increment the player one score', () => {
        const resultOne = matchReducer(initialState, matchActions.incrementPlayerOneScore());

        expect(resultOne.playerOneScore).toEqual(1);

        const resultTwo = matchReducer(resultOne, matchActions.incrementPlayerOneScore());

        expect(resultTwo.playerOneScore).toEqual(2);

        const resultThree = matchReducer(resultTwo, matchActions.incrementPlayerOneScore());

        expect(resultThree.playerOneScore).toEqual(3);
    });

    it('should increment the player two score', () => {
        const resultOne = matchReducer(initialState, matchActions.incrementPlayerTwoScore());

        expect(resultOne.playerTwoScore).toEqual(1);

        const resultTwo = matchReducer(resultOne, matchActions.incrementPlayerTwoScore());

        expect(resultTwo.playerTwoScore).toEqual(2);

        const resultThree = matchReducer(resultTwo, matchActions.incrementPlayerTwoScore());

        expect(resultThree.playerTwoScore).toEqual(3);
    });
});