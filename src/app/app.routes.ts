import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RickAndMortyPageComponent } from './pages/rick-and-morty-page/rick-and-morty-page.component';
import { EpisodesPageComponent } from './pages/episodes-page/episodes-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
   {
       path: '',
       component: HomeComponent
   },
   {
       path: 'characters',
       component: RickAndMortyPageComponent
   },
   {
      path: 'episodes',
      component: EpisodesPageComponent
   },
   {
      path: 'dashboard',
      component: DashboardComponent
   }
];
