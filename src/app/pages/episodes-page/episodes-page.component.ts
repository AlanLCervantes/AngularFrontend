import { Component, OnInit } from '@angular/core';
import { RickAndMortyAPIService } from '../../services/rick-and-morty-api.service';
import { Episode, EpisodeResponse } from '../../models/Episodes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-episodes-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './episodes-page.component.html',
  styleUrls: ['./episodes-page.component.css'],
})
export class EpisodesPageComponent implements OnInit {
  episodes: Episode[] = [];
  info: EpisodeResponse['info'] | null = null;

  constructor(private apiService: RickAndMortyAPIService) {}

  ngOnInit(): void {
    this.getEpisodes();
  }

  getEpisodes() {
    this.apiService.EpisodesService().subscribe(
      (res) => {
        this.episodes = res.results;
        this.info = res.info;
        console.log('Episodes:', this.episodes);
      },
      (err) => {
        alert('Error al obtener episodios: ' + err.message);
      }
    );
  }
}
