import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, subscribeOn } from 'rxjs';
import { Rating } from '../models/rating.model';

@Injectable({
  providedIn: 'root'
})
export class ComicService {
  indexComic = 1
  actComic = new Subject<{}>();
  actRating = new Subject<number>();
  ratings = new Map();

  constructor(private httpClient: HttpClient){}

  getComic(){
    this.httpClient.get('/api/' + this.indexComic + '/info.0.json').subscribe(data => {
      this.actComic.next(data)
    });
    this.actRating.next(this.ratings.get(this.indexComic))
  }

  nextComic(){
    if (this.indexComic < 2948){
      this.indexComic++;
      this.getComic()
    }
  }

  prevoiusComic(){
    if (this.indexComic > 1){
      this.indexComic--;
      this.getComic()
    }
  }

  getRandomComic(){
    this.indexComic = Math.floor(Math.random() * 2948) + 1;
    this.getComic()
  }

  rateComic(rating : number){
    this.ratings.set(this.indexComic, rating);
    this.actRating.next(this.ratings.get(this.indexComic))
  }

  getRating(){
    return this.ratings.get(this.indexComic)
  }
}
