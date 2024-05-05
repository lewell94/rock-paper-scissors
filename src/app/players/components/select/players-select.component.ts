import { Component } from "@angular/core";
import { NumberOfPlayers } from "../../../shared/models/number-of-players.enum";
import { Store } from "@ngrx/store";
import { MatchState } from "../../../shared/state/match/match.reducer";
import { matchActions } from "../../../shared/state/match/match.actions";

@Component({
    selector: 'app-players-select',
    templateUrl: './players-select.component.html',
    styleUrls: ['./players-select.component.scss']
})
export class PlayersSelectComponent {

    NumberOfPlayers = NumberOfPlayers;

    constructor(private store: Store<MatchState>) {}

    startGame(numberOfPlayers: NumberOfPlayers) {
        this.store.dispatch(matchActions.setNumberOfPlayers({ numberOfPlayers }));

        if (numberOfPlayers === NumberOfPlayers.ONE) {
            this.store.dispatch(matchActions.setPlayerTwoName({ playerTwoName: 'CPU' }));
        }
    }
}