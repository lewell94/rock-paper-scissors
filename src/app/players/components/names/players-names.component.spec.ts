import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SharedModule } from "../../../shared/shared.module";
import { By } from "@angular/platform-browser";
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { matchActions } from "../../../shared/state/match/match.actions";
import { NumberOfPlayers } from "../../../shared/models/number-of-players.enum";
import { PlayersNamesComponent } from "./players-names.component";
import { matchSelectors } from "../../../shared/state/match/match.selectors";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { Router } from "@angular/router";

describe('PlayersNamesComponent', () => {
    let component: PlayersNamesComponent;
    let fixture: ComponentFixture<PlayersNamesComponent>;
    let store: MockStore;
    let router: Partial<Router>;

    const mockRouter  = {
        navigate: jasmine.createSpy()
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SharedModule, MatFormFieldModule, MatInputModule, FormsModule, NoopAnimationsModule],
            declarations: [PlayersNamesComponent],
            providers: [
                provideMockStore({
                    selectors: [
                        {
                            selector: matchSelectors.getNumberOfPlayers,
                            value: NumberOfPlayers.ONE
                        },
                    ]
                }),
                { provide: Router, useValue: mockRouter },
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PlayersNamesComponent);
        component = fixture.componentInstance;
        store = TestBed.inject(MockStore);
        router = TestBed.inject(Router);

        spyOn(store, 'dispatch');

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should dispatch player one name and naviagte to game page when submitted', () => {
        const input = fixture.debugElement.query(By.css('.names__input--one')).nativeElement;

        input.value = 'Adam';
        input.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        
        const btn = fixture.debugElement.query(By.css('.names__submit__btn')).nativeElement;

        btn.click();

        expect(store.dispatch).toHaveBeenCalledWith(matchActions.setPlayerOneName({
            playerOneName: 'Adam'
        }));
        expect(router.navigate).toHaveBeenCalledWith(['/game']);
    });

    it('should dispatch both names and naviagte to game page when submitted', () => {
        store.overrideSelector(matchSelectors.getNumberOfPlayers, NumberOfPlayers.TWO);
        store.refreshState();
        fixture.detectChanges();

        const inputOne = fixture.debugElement.query(By.css('.names__input--one')).nativeElement;
        const inputTwo = fixture.debugElement.query(By.css('.names__input--two')).nativeElement;

        inputOne.value = 'Adam';
        inputTwo.value = 'Bob';
        inputOne.dispatchEvent(new Event('input'));
        inputTwo.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        
        const btn = fixture.debugElement.query(By.css('.names__submit__btn')).nativeElement;

        btn.click();

        expect(store.dispatch).toHaveBeenCalledWith(matchActions.setPlayerOneName({
            playerOneName: 'Adam'
        }));
        expect(store.dispatch).toHaveBeenCalledWith(matchActions.setPlayerTwoName({
            playerTwoName: 'Bob'
        }));
        expect(router.navigate).toHaveBeenCalledWith(['/game']);
    });
});