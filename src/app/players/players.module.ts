import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { playersRoutes } from "./players.routing";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { PlayersComponent } from "./components/players/players.component";

@NgModule({
    imports: [
        RouterModule.forChild(playersRoutes),
        SharedModule,
        CommonModule
    ],
    declarations: [
        PlayersComponent,
    ],
})
export class PlayersModule {}