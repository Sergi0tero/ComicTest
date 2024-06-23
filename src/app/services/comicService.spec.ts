import { TestBed } from '@angular/core/testing';

import { ComicService } from './comic.service';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('ComicService', () => {
    let service: ComicService;
    let httpMock: HttpTestingController;
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [HttpClientTestingModule], // Import HttpClientTestingModule here
        providers: [ComicService] // Provide your service here
      }).compileComponents();
  
      service = TestBed.inject(ComicService);
      httpMock = TestBed.inject(HttpTestingController);
    });
  
    it('Should create the service', () => {
        console.log(service)
        expect(service).toBeTruthy();
    });
  
    it('Should change to next comic', () => {
        service.nextComic();
        const req = httpMock.expectOne('/api/2/info.0.json');
        expect(req.request.method).toBe('GET');
        expect(service.indexComic).toBe(2);
    });
  
    it('Should change to previous comic', () => {
        service.nextComic();
        httpMock.expectOne('/api/2/info.0.json');
        expect(service.indexComic).toBe(2);
        service.prevoiusComic();
        httpMock.expectOne('/api/1/info.0.json');
        expect(service.indexComic).toBe(1);
    });
  
    it('Should change to random comic', () => {
        expect(service.indexComic).toBe(1);
        service.getRandomComic();
        httpMock.expectOne('/api/' + service.indexComic + '/info.0.json');
        expect(service.indexComic).not.toBe(1)
    });
  
    it('Should rate the comic', () => {
        expect(service.getRating()).toBeUndefined()
        service.rateComic(2)
        expect(service.getRating()).toBe(2)
    });
  
    afterEach(() => {
      httpMock.verify(); // Ensure no pending HTTP requests
    });
});
