import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  constructor(private http: HttpClient) {
  }

  getCharacters() {
    return this.http.get<GetCharactersResponse>(`${environment.apiUrl}/character`)
  }

  update(character: Character) {
    return this.http.put(`${environment.apiUrl}/character`, character)
  }
}

export interface Character {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  created: string
}

export interface GetCharactersResponse {
  info: {
    count: number
    pages: number
    next?: string
    prev?: string
  },
  results: Character[]
}

