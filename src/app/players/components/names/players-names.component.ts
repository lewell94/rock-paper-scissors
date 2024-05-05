import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { MatchState } from "../../../shared/state/match/match.reducer";
import { Observable } from "rxjs";
import { NumberOfPlayers } from "../../../shared/models/number-of-players.enum";
import { matchSelectors } from "../../../shared/state/match/match.selectors";
import { matchActions } from "../../../shared/state/match/match.actions";
import { Router } from "@angular/router";

@Component({
    selector: 'app-players-names',
    templateUrl: './players-names.component.html',
    styleUrls: ['./players-names.component.scss']
})
export class PlayersNamesComponent {

    NumberOfPlayers = NumberOfPlayers;

    numberOfPlayers$: Observable<NumberOfPlayers | null>;

    playerOneName: string;
    playerTwoName: string;

    constructor(private store: Store<MatchState>, private router: Router) {
        this.numberOfPlayers$ = this.store.select(matchSelectors.getNumberOfPlayers);
        this.playerOneName = '';
        this.playerTwoName = '';
    }

    submitNames() {
        this.store.dispatch(matchActions.setPlayerOneName({ playerOneName: this.playerOneName }));

        if (this.playerTwoName) {
            this.store.dispatch(matchActions.setPlayerTwoName({ playerTwoName: this.playerTwoName }));
        }

        this.router.navigate(['/game/player-one']);
    }
}