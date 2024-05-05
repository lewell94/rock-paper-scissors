import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { gameRoutes } from "./game.routing";
import { GameComponent } from "./components/game/game.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    imports: [
        RouterModule.forChild(gameRoutes),
        CommonModule,
        SharedModule,
    ],
    declarations: [
        GameComponent
    ],
})
export class GameModule {}