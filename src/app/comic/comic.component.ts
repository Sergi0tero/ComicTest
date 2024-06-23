import { Component, OnInit } from '@angular/core';
import { ComicService } from '../services/comic.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrl: './comic.component.scss'
})

/**
 * Clase donde se maneja la informacion estatica del comic
 */
export class ComicComponent implements OnInit{
  comicSub: Subscription;
  comic : any;
  dataLoaded = false;


  /**
   * Inyecta el servicio en el que se manejan los estados
   * @param comicService 
   */
  constructor(private comicService: ComicService){}

  /**
   * Se suscribe al servicio de los comics al iniciar el componente
   */
  ngOnInit(): void {
    this.comicSub = this.comicService.actComic.subscribe(
      data => {
        this.comic = data;
        this.dataLoaded = true;
      }
    )
    this.getComic();
  }

  getComic(){
    this.comicService.getComic()
  }
}
