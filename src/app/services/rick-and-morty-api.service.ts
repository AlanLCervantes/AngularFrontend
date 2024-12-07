import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/RickAndMorty';
import { EpisodeResponse } from '../models/Episodes';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyAPIService {
  constructor(private http: HttpClient) {}

  private body(data: any) {
    return JSON.stringify(data);
  }

  private header() {
    return {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  }

  private url(endpoint: string) {
    return `https://rickandmortyapi.com/api/${endpoint}`;
  }

  public CharacterService(): Observable<Character> {
    return this.http.get<Character>(this.url('character'), this.header());
  }

     public EpisodesService(): Observable<EpisodeResponse> {
    return this.http.get<EpisodeResponse>(this.url('episode'));
  }


}