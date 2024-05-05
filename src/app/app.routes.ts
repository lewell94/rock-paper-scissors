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
];
