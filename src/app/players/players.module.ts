import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { playersRoutes } from "./players.routing";
import { SharedModule } from "../shared/shared.module";
import { PlayersComponent } from "./components/players/players.component";
import { PlayersSelectComponent } from "./components/select/players-select.component";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { PlayersNamesComponent } from "./components/names/players-names.component";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        RouterModule.forChild(playersRoutes),
        SharedModule,
        MatButtonModule,
        MatInputModule,
        FormsModule,
        MatFormFieldModule,
        CommonModule,
    ],
    declarations: [
        PlayersComponent,
        PlayersSelectComponent,
        PlayersNamesComponent,
    ],
})
export class PlayersModule {}