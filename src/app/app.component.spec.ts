import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(async() => {
    await TestBed.configureTestingModule({
        declarations: [],
        imports: [HttpClientTestingModule],
        providers: [AppComponent]
    }).compileComponents();
  });

  it('Should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
