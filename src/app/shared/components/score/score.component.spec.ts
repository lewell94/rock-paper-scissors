import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ScoreComponent } from "./score.component";
import { By } from "@angular/platform-browser";
import { Component } from "@angular/core";

@Component({
    selector: 'test-component',
    template: `
        <app-score
            [playerOneName]="playerOneName"
            [playerTwoName]="playerTwoName"
            [playerOneScore]="playerOneScore"
            [playerTwoScore]="playerTwoScore"
        ></app-score>`,
})
class TestComponent {
    playerOneName: string = '';
    playerTwoName: string = '';
    playerOneScore: number = 0;
    playerTwoScore: number = 0;
}

describe('ScoreComponent', () => {
    let component: ScoreComponent;
    let testComponent: TestComponent;
    let fixture: ComponentFixture<TestComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TestComponent, ScoreComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        component = fixture.debugElement.query(By.css('app-score')).componentInstance;

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display the score', () => {
        testComponent.playerOneName = 'Adam';
        testComponent.playerTwoName = 'Bob';
        testComponent.playerOneScore = 5;
        testComponent.playerTwoScore = 12;

        const score = fixture.debugElement.query(By.css('.score__info')).nativeElement;

        expect(score.innerHTML).toEqual('Score: Adam - 5 vs Bob 12');
    });
});