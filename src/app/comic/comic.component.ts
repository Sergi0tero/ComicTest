import { Component, OnInit } from '@angular/core';
import { ComicService } from '../services/comic.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrl: './comic.component.scss'
})
export class ComicComponent implements OnInit{
  comicSub: Subscription;
  comic : any;
  dataLoaded = false;

  constructor(private comicService: ComicService){}

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
