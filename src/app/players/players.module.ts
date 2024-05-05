import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { playersRoutes } from "./players.routing";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { PlayersComponent } from "./components/players/players.component";
import { PlayersSelectComponent } from "./components/select/players-select.component";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
    imports: [
        RouterModule.forChild(playersRoutes),
        SharedModule,
        MatButtonModule,
    ],
    declarations: [
        PlayersComponent,
        PlayersSelectComponent,
    ],
})
export class PlayersModule {}