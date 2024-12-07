import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { RickAndMortyPageComponent } from './pages/rick-and-morty-page/rick-and-morty-page.component';
import { CommonModule } from '@angular/common';
import { EpisodesPageComponent } from './pages/episodes-page/episodes-page.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, RickAndMortyPageComponent, EpisodesPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
