import { Routes } from "@angular/router";
import { PlayersComponent } from "./components/players/players.component";
import { PlayersSelectComponent } from "./components/select/players-select.component";

export const playersRoutes: Routes = [
    {
        path: '',
        component: PlayersComponent,
        children: [
            {
                path: 'select',
                component: PlayersSelectComponent
            },
        ]
    },
];