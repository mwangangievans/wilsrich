import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksWilsrichComponent } from './books-wilsrich.component';

describe('BooksWilsrichComponent', () => {
  let component: BooksWilsrichComponent;
  let fixture: ComponentFixture<BooksWilsrichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksWilsrichComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BooksWilsrichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
