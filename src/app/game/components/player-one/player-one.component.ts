import { Component } from "@angular/core";
import { Choice } from "../../../shared/models/choice.enum";
import { Store } from "@ngrx/store";
import { RoundState } from "../../../shared/state/round/round.reducer";
import { roundActions } from "../../../shared/state/round/round.actions";
import { MatchState } from "../../../shared/state/match/match.reducer";
import { Observable, take } from "rxjs";
import { NumberOfPlayers } from "../../../shared/models/number-of-players.enum";
import { matchSelectors } from "../../../shared/state/match/match.selectors";
import { Router } from "@angular/router";
import { CpuService } from "../../../shared/services/cpu.service";

@Component({
    selector: 'app-player-one',
    templateUrl: './player-one.component.html'
})
export class PlayerOneComponent {

    numberOfPlayers$: Observable<NumberOfPlayers | null>;
    playerOneName$: Observable<string>;

    constructor(private store: Store<MatchState | RoundState>, private router: Router, private cpu: CpuService) {
        this.numberOfPlayers$ = this.store.select(matchSelectors.getNumberOfPlayers);
        this.playerOneName$ = this.store.select(matchSelectors.getPlayerOneName);
    }

    saveChoice(playerOneChoice: Choice) {
        this.store.dispatch(roundActions.setPlayerOneChoice({ playerOneChoice }));

        this.numberOfPlayers$.pipe(take(1)).subscribe(numberOfPlayers => {
            if (numberOfPlayers === NumberOfPlayers.ONE) {
                this.store.dispatch(roundActions.setPlayerTwoChoice({
                    playerTwoChoice: this.cpu.getRandomChoice()
                }));
                this.router.navigate(['/result']);
            } else {
                this.router.navigate(['/game/player-two']);
            }
        });
    }
}
