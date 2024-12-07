import { Component } from '@angular/core';
import { RickAndMortyAPIService } from '../../services/rick-and-morty-api.service';
import { Results } from '../../models/RickAndMorty';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-rick-and-morty-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rick-and-morty-page.component.html',
  styleUrls: ['./rick-and-morty-page.component.css'],
})
export class RickAndMortyPageComponent implements OnInit {
  characters: Results[] = [];

  constructor(private apiRickMorty: RickAndMortyAPIService) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.apiRickMorty.CharacterService().subscribe(
      (res) => {
        this.characters = res.results;
        console.log('Characters:', this.characters);
      },
      (err) => {
        alert('Error al obtener personajes: ' + err.message);
      }
    );
  }
}