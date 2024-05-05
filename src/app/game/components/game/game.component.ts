import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { MatchState } from "../../../shared/state/match/match.reducer";
import { matchSelectors } from "../../../shared/state/match/match.selectors";

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html'
})
export class GameComponent {

    playerOneName$: Observable<string>;
    playerTwoName$: Observable<string>;
    playerOneScore$: Observable<number>;
    playerTwoScore$: Observable<number>;

    constructor(private store: Store<MatchState>) {
        this.playerOneName$ = this.store.select(matchSelectors.getPlayerOneName);
        this.playerTwoName$ = this.store.select(matchSelectors.getPlayerTwoName);
        this.playerOneScore$ = this.store.select(matchSelectors.getPlayerOneScore);
        this.playerTwoScore$ = this.store.select(matchSelectors.getPlayerTwoScore);
    }
}