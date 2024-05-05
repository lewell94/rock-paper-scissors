import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MatchState } from "./match.reducer";

export const matchStoreKey = 'match';

const getMatchFeatureState = createFeatureSelector<MatchState>(matchStoreKey);

export const matchSelectors = {
    getNumberOfPlayers: createSelector(getMatchFeatureState, state => state.numberOfPlayers),
    getPlayerOneName: createSelector(getMatchFeatureState, state => state.playerOneName),
    getPlayerTwoName: createSelector(getMatchFeatureState, state => state.playerTwoName),
};