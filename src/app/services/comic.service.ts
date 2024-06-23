import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/**
 * "Manejador de estados" usando un servicio de angular
 */
export class ComicService {
  indexComic = 1
  actComic = new Subject<{}>();
  actRating = new Subject<number>();
  ratings = new Map();

  constructor(private httpClient: HttpClient){}

  /**
   * Hace la peticion HTTP GET a la api, usa la data de la respuesta y avisa a aquellos que esten suscritos sobre el cambio.
   */
  getComic(){
    this.httpClient.get('/api/' + this.indexComic + '/info.0.json').subscribe(data => {
      this.actComic.next(data)
      console.log(data)
    });
    this.actRating.next(this.ratings.get(this.indexComic));
  }

  /**
   * Suma el indice del comic actual para ir al siguiente
   */
  nextComic(){
    if (this.indexComic < 2948){
      this.indexComic++;
      this.getComic()
    }
  }


  /**
   * Resta el indice del comic actual para ir al anterior
   */
  prevoiusComic(){
    if (this.indexComic > 1){
      this.indexComic--;
      this.getComic()
    }
  }

  /**
   * Saca un numero random, usa este numero para desplegar un comic aleatorio
   */
  getRandomComic(){
    this.indexComic = Math.floor(Math.random() * 2948) + 1;
    this.getComic()
  }

  /**
   * Coloca una puntuacion al comic actual
   * @param rating: El puntaje puesto al comic desplegado
   */
  rateComic(rating : number){
    this.ratings.set(this.indexComic, rating);
    this.actRating.next(this.ratings.get(this.indexComic))
  }

  getRating(){
    return this.ratings.get(this.indexComic)
  }
}
