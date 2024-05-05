import { createAction, props } from "@ngrx/store";
import { NumberOfPlayers } from "../../models/number-of-players.enum";

const prefix = '[MATCH]';

export const matchActions = {
    setNumberOfPlayers: createAction(`${prefix} SET_NUMBER_OF_PLAYERS`, props<{ numberOfPlayers: NumberOfPlayers }>()),
    setPlayerOneName: createAction(`${prefix} SET_PLAYER_ONE_NAME`, props<{ playerOneName: string }>()),
    setPlayerTwoName: createAction(`${prefix} SET_PLAYER_TWO_NAME`, props<{ playerTwoName: string }>()),
    incrementPlayerOneScore: createAction(`${prefix} INCREMENT_PLAYER_ONE_SCORE`),
    incrementPlayerTwoScore: createAction(`${prefix} INCREMENT_PLAYER_TWO_SCORE`),
};