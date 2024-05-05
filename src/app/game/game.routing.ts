import { Routes } from "@angular/router";
import { GameComponent } from "./components/game/game.component";
import { PlayerOneComponent } from "./components/player-one/player-one.component";
import { PlayerTwoComponent } from "./components/player-two/player-two.component";

export const gameRoutes: Routes = [
    {
        path: '',
        component: GameComponent,
        children: [
            {
                path: 'player-one',
                component: PlayerOneComponent
            },
            {
                path: 'player-two',
                component: PlayerTwoComponent
            }
        ]
    },
];