import { TestBed } from '@angular/core/testing';

import { InteractionsComponent } from './interactions.component';
import { HttpClientTestingModule} from '@angular/common/http/testing';

describe('InteractionsComponent', () => {
  
  let component: InteractionsComponent;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
        declarations: [],
        imports: [HttpClientTestingModule],
        providers: [InteractionsComponent]
    }).compileComponents();
    const fixture = TestBed.createComponent(InteractionsComponent);
    component = fixture.componentInstance;
  });

  it('Should create the interactions component', () => {
    console.log(component)
    expect(component).toBeTruthy();
  })
});
