import { createReducer, on } from "@ngrx/store";
import { roundActions } from "./round.actions";
import { Choice } from "../../models/choice.enum";

export interface RoundState {
    playerOneChoice: Choice | null;
    playerTwoChoice: Choice | null;
}

export const initialState: RoundState = {
    playerOneChoice: null,
    playerTwoChoice: null,
};

export const roundReducer = createReducer(
    initialState,
    on(roundActions.setPlayerOneChoice, (state, { playerOneChoice }) => ({ ...state, playerOneChoice })),
    on(roundActions.setPlayerTwoChoice, (state, { playerTwoChoice }) => ({ ...state, playerTwoChoice })),
    on(roundActions.clear, () => initialState),
);