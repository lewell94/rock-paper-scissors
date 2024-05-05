import { Routes } from "@angular/router";
import { PlayersComponent } from "./components/players/players.component";
import { PlayersSelectComponent } from "./components/select/players-select.component";
import { PlayersNamesComponent } from "./components/names/players-names.component";

export const playersRoutes: Routes = [
    {
        path: '',
        component: PlayersComponent,
        children: [
            {
                path: 'select',
                component: PlayersSelectComponent
            },
            {
                path: 'names',
                component: PlayersNamesComponent
            },
        ]
    },
];