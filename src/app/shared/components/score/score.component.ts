import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-score',
    templateUrl: './score.component.html',
    styleUrls: ['./score.component.scss'],
})
export class ScoreComponent {

    @Input() playerOneName: string | null;
    @Input() playerTwoName: string | null;
    @Input() playerOneScore: number | null;
    @Input() playerTwoScore: number | null;

    constructor() {
        this.playerOneName = '';
        this.playerTwoName = '';
        this.playerOneScore = 0;
        this.playerTwoScore = 0;
    }
}
