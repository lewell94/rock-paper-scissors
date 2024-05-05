import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RoundState } from "./round.reducer";

export const roundStoreKey = 'round';

const getRoundFeatureState = createFeatureSelector<RoundState>(roundStoreKey);

export const roundSelectors = {
    getPlayerOneChoice: createSelector(getRoundFeatureState, state => state.playerOneChoice),
    getPlayerTwoChoice: createSelector(getRoundFeatureState, state => state.playerTwoChoice),
};