import { Component, OnInit } from '@angular/core';
import { ComicService } from '../services/comic.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-interactions',
  templateUrl: './interactions.component.html',
  styleUrl: './interactions.component.scss'
})

/**
 * Clase donde se manejan todas las interacciones que tiene el usuario con la app
 */
export class InteractionsComponent implements OnInit{
  ratingSub: Subscription;
  rating : number;

  /**
   * Inyecta el servicio en el que se manejan los estados
   * @param comicService 
   */
  constructor(private comicService: ComicService){}

  /**
   * Se suscribe al servicio de puntajes al iniciar el componente
   */
  ngOnInit(): void {
    this.ratingSub = this.comicService.actRating.subscribe( data =>{
        this.rating = data
    })
  }

  getNextComic(){
    this.comicService.nextComic()
  }

  getPreviousComic(){
    this.comicService.prevoiusComic()
  }
  
  getRandomComic(){
    this.comicService.getRandomComic()
  }

  setRating(rating : number){
    this.comicService.rateComic(rating)
  }
}
