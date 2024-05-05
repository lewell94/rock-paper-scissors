import { Component } from "@angular/core";
import { Store, compose } from "@ngrx/store";
import { RoundState } from "../../../shared/state/round/round.reducer";
import { Observable, combineLatest, map, take, zip } from "rxjs";
import { Choice } from "../../../shared/models/choice.enum";
import { roundSelectors } from "../../../shared/state/round/round.selectors";
import { MatchState } from "../../../shared/state/match/match.reducer";
import { matchSelectors } from "../../../shared/state/match/match.selectors";
import { GameService } from "../../../shared/services/game.service";
import { NumberOfPlayers } from "../../../shared/models/number-of-players.enum";
import { matchActions } from "../../../shared/state/match/match.actions";
import { roundActions } from "../../../shared/state/round/round.actions";
import { Router } from "@angular/router";

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss']
})
export class ResultComponent {

    NumberOfPlayers = NumberOfPlayers;

    playerOneName$: Observable<string | null>;
    playerTwoName$: Observable<string | null>;
    playerOneChoice$: Observable<Choice | null>;
    playerTwoChoice$: Observable<Choice | null>;
    winner: number | null;

    constructor(private store: Store<MatchState | RoundState>, private game: GameService, private router: Router) {
        this.playerOneName$ = this.store.select(matchSelectors.getPlayerOneName);
        this.playerTwoName$ = this.store.select(matchSelectors.getPlayerTwoName);
        this.playerOneChoice$ = this.store.select(roundSelectors.getPlayerOneChoice);
        this.playerTwoChoice$ = this.store.select(roundSelectors.getPlayerTwoChoice);
        this.winner = null;

        combineLatest([this.playerOneChoice$, this.playerTwoChoice$]).pipe(take(1)).subscribe(
            ([playerOneChoice, playerTwoChoice]) => {
                this.winner = this.game.findWinner(playerOneChoice, playerTwoChoice);
                
                if (this.winner === 1) {
                    this.store.dispatch(matchActions.incrementPlayerOneScore());
                } else {
                    this.store.dispatch(matchActions.incrementPlayerTwoScore());
                }
            }
        );
    }

    nextRound() {
        this.store.dispatch(roundActions.clear());
        this.router.navigate(['/game/player-one']);
    }
}
