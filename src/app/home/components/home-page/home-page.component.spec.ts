import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HomePageComponent } from "./home-page.component";
import { Router } from "@angular/router";
import { SharedModule } from "../../../shared/shared.module";
import { By } from "@angular/platform-browser";

describe('HomePageComponent', () => {
    let component: HomePageComponent;
    let fixture: ComponentFixture<HomePageComponent>;
    let router: Partial<Router>;

    const mockRouter = {
        navigate: jasmine.createSpy(),
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SharedModule],
            declarations: [HomePageComponent],
            providers: [
                { provide: Router, useValue: mockRouter },
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HomePageComponent);
        component = fixture.componentInstance;
        router = TestBed.inject(Router);

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should naviagte to the players page when the new game btn is clicked', () => {
        const btn = fixture.debugElement.query(By.css('.home__newgame')).nativeElement;

        btn.click();

        expect(router.navigate).toHaveBeenCalledWith(['/players/select']);
    });
});