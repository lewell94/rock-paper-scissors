import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { gameRoutes } from "./game.routing";
import { GameComponent } from "./components/game/game.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { ChoiceComponent } from "./components/choice/choice.component";
import { PlayerOneComponent } from "./components/player-one/player-one.component";
import { PlayerTwoComponent } from "./components/player-two/player-two.component";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
    imports: [
        RouterModule.forChild(gameRoutes),
        CommonModule,
        SharedModule,
        MatButtonModule,
    ],
    declarations: [
        GameComponent,
        ChoiceComponent,
        PlayerOneComponent,
        PlayerTwoComponent,
    ],
})
export class GameModule {}