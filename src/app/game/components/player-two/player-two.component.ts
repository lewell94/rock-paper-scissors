import { Component } from "@angular/core";
import { Choice } from "../../../shared/models/choice.enum";
import { Store } from "@ngrx/store";
import { RoundState } from "../../../shared/state/round/round.reducer";
import { roundActions } from "../../../shared/state/round/round.actions";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { matchSelectors } from "../../../shared/state/match/match.selectors";

@Component({
    selector: 'app-player-two',
    templateUrl: './player-two.component.html'
})
export class PlayerTwoComponent {

    playerTwoName$: Observable<string>;

    constructor(private store: Store<RoundState>, private router: Router) {
        this.playerTwoName$ = this.store.select(matchSelectors.getPlayerTwoName);
    }

    saveChoice(playerTwoChoice: Choice) {
        this.store.dispatch(roundActions.setPlayerTwoChoice({ playerTwoChoice }));
        this.router.navigate(['/game/result']);
    }
}
