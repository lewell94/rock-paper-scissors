import { createReducer, on } from "@ngrx/store";
import { NumberOfPlayers } from "../../models/number-of-players.enum";
import { matchActions } from "./match.actions";

export interface MatchState {
    numberOfPlayers: NumberOfPlayers | null;
    playerOneName: string;
    playerTwoName: string;
    playerOneScore: number;
    playerTwoScore: number;
}

export const initialState: MatchState = {
    numberOfPlayers: null,
    playerOneName: '',
    playerTwoName: '',
    playerOneScore: 0,
    playerTwoScore: 0,
};

export const matchReducer = createReducer(
    initialState,
    on(matchActions.setNumberOfPlayers, (state, { numberOfPlayers }) => ({ ...state, numberOfPlayers })),
    on(matchActions.setPlayerOneName, (state, { playerOneName }) => ({ ...state, playerOneName })),
    on(matchActions.setPlayerTwoName, (state, { playerTwoName }) => ({ ...state, playerTwoName })),
    on(matchActions.incrementPlayerOneScore, (state) => ({ ...state, playerOneScore: state.playerOneScore + 1 })),
    on(matchActions.incrementPlayerTwoScore, (state) => ({ ...state, playerTwoScore: state.playerTwoScore + 1 })),
);