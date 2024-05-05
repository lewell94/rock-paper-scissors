import { createReducer, on } from "@ngrx/store";
import { NumberOfPlayers } from "../../models/number-of-players.enum";
import { matchActions } from "./match.actions";

export interface MatchState {
    numberOfPlayers: NumberOfPlayers | null;
    playerOneName: string;
    playerTwoName: string;
}

export const initialState: MatchState = {
    numberOfPlayers: null,
    playerOneName: '',
    playerTwoName: '',
};

export const matchReducer = createReducer(
    initialState,
    on(matchActions.setNumberOfPlayers, (state, { numberOfPlayers }) => ({ ...state, numberOfPlayers })),
    on(matchActions.setPlayerOneName, (state, { playerOneName }) => ({ ...state, playerOneName })),
    on(matchActions.setPlayerTwoName, (state, { playerTwoName }) => ({ ...state, playerTwoName })),
);