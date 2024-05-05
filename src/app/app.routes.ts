import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
        pathMatch: 'full'
    },
    {
        path: 'players',
        loadChildren: () => import('./players/players.module').then(m => m.PlayersModule),
    },
    {
        path: 'game',
        loadChildren: () => import('./game/game.module').then(m => m.GameModule),
    },
];
