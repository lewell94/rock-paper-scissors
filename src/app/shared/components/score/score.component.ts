import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-score',
    templateUrl: './score.component.html',
    styleUrls: ['./score.component.scss'],
})
export class ScoreComponent {

    @Input() playerOneName: string;
    @Input() playerTwoName: string;
    @Input() playerOneScore: number;
    @Input() playerTwoScore: number;

    constructor() {
        this.playerOneName = '';
        this.playerTwoName = '';
        this.playerOneScore = 0;
        this.playerTwoScore = 0;
    }
}
