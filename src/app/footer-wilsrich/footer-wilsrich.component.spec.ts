import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterWilsrichComponent } from './footer-wilsrich.component';

describe('FooterWilsrichComponent', () => {
  let component: FooterWilsrichComponent;
  let fixture: ComponentFixture<FooterWilsrichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterWilsrichComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterWilsrichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
