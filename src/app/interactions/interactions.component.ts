import { Component, OnInit } from '@angular/core';
import { ComicService } from '../services/comic.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-interactions',
  templateUrl: './interactions.component.html',
  styleUrl: './interactions.component.css'
})
export class InteractionsComponent implements OnInit{
  ratingSub: Subscription;
  rating : number;

  constructor(private comicService: ComicService){}

  ngOnInit(): void {
    this.ratingSub = this.comicService.actRating.subscribe( data =>{
        this.rating = data
        console.log(data)
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
