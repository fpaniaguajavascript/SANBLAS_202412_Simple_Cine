import { Component, inject } from '@angular/core';
import { IonList, IonContent } from '@ionic/angular/standalone';
import { PeliculasWebService } from '../services/peliculas-web.service';
import { IMovie } from '../interfaces/imovie';
import { CommonModule } from '@angular/common';
import { FichapeliculaComponent } from "../components/fichapelicula/fichapelicula.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonList, IonContent, CommonModule, FichapeliculaComponent],
})
export class HomePage {
  servicioPeliculas = inject(PeliculasWebService);
  movies : IMovie[] = [];
  constructor() {
    this.servicioPeliculas.getMovies().subscribe((movies) => {
      this.movies = movies;
      console.log(movies);
    });
  }
}