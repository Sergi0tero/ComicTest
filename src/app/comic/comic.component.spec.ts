import { TestBed } from '@angular/core/testing';

import { ComicComponent } from './comic.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ComicComponent', () => {
  let component: ComicComponent;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
        declarations: [],
        imports: [HttpClientTestingModule],
        providers: [ComicComponent]
    }).compileComponents();
    const fixture = TestBed.createComponent(ComicComponent);
    component = fixture.componentInstance;
  });

  it('Should create the comics component', () => {
    console.log(component)
    expect(component).toBeTruthy();
  });
});
