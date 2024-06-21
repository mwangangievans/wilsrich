import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWilsrichComponent } from './header-wilsrich.component';

describe('HeaderWilsrichComponent', () => {
  let component: HeaderWilsrichComponent;
  let fixture: ComponentFixture<HeaderWilsrichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderWilsrichComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderWilsrichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
