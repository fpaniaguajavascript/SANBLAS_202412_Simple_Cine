import { Component, Input, OnInit} from '@angular/core';
import { IonLabel, IonItem, IonImg } from '@ionic/angular/standalone';
import { IMovie } from 'src/app/interfaces/imovie';


@Component({
  selector: 'app-fichapelicula',
  templateUrl: './fichapelicula.component.html',
  styleUrls: ['./fichapelicula.component.scss'],
  imports: [IonLabel, IonItem, IonImg],
})
export class FichapeliculaComponent  implements OnInit {

  @Input() pelicula!: IMovie;
  constructor() { }

  ngOnInit() {}

}
