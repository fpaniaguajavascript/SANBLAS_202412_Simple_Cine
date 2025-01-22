import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from '../interfaces/imovie';


@Injectable({
  providedIn: 'root'
})
export class PeliculasWebService {
  static URL = 'https://fpaniaguajavascript.github.io/movies.json';

  constructor(private httpClient: HttpClient) {}

  public getMovies() : Observable<IMovie[]> {
      return this.httpClient.get<IMovie[]>(PeliculasWebService.URL);
  }
}