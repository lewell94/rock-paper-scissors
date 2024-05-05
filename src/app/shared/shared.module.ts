import { NgModule } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { ScoreComponent } from "./components/score/score.component";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        HeaderComponent,
        ScoreComponent,
    ],
    exports: [
        HeaderComponent,
        ScoreComponent,
    ],
})
export class SharedModule {}