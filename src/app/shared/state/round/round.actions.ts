import { createAction, props } from "@ngrx/store";
import { Choice } from "../../models/choice.enum";

const prefix = '[ROUND]';

export const roundActions = {
    setPlayerOneChoice: createAction(`${prefix} SET_PLAYER_ONE_CHOICE`, props<{ playerOneChoice: Choice }>()),
    setPlayerTwoChoice: createAction(`${prefix} SET_PLAYER_TWO_CHOICE`, props<{ playerTwoChoice: Choice }>()),
};