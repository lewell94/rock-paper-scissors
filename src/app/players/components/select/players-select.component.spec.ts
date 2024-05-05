import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SharedModule } from "../../../shared/shared.module";
import { By } from "@angular/platform-browser";
import { PlayersSelectComponent } from "./players-select.component";
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { matchActions } from "../../../shared/state/match/match.actions";
import { NumberOfPlayers } from "../../../shared/models/number-of-players.enum";

describe('PlayersSelectComponent', () => {
    let component: PlayersSelectComponent;
    let fixture: ComponentFixture<PlayersSelectComponent>;
    let store: MockStore;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SharedModule],
            declarations: [PlayersSelectComponent],
            providers: [
                provideMockStore(),
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PlayersSelectComponent);
        component = fixture.componentInstance;
        store = TestBed.inject(MockStore);

        spyOn(store, 'dispatch');

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should dispatch one player game and player 2 name CPU when the 1 player game btn is clicked', () => {
        const btn = fixture.debugElement.query(By.css('.players__button--one')).nativeElement;

        btn.click();

        expect(store.dispatch).toHaveBeenCalledWith(matchActions.setNumberOfPlayers({
            numberOfPlayers: NumberOfPlayers.ONE
        }));
        expect(store.dispatch).toHaveBeenCalledWith(matchActions.setPlayerTwoName({ playerTwoName: 'CPU' }));
    });

    it('should dispatch two player game when the 2 player game btn is clicked', () => {
        const btn = fixture.debugElement.query(By.css('.players__button--two')).nativeElement;

        btn.click();

        expect(store.dispatch).toHaveBeenCalledWith(matchActions.setNumberOfPlayers({
            numberOfPlayers: NumberOfPlayers.TWO
        }));
    });
});