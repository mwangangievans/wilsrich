import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusWilsrichComponent } from './campus-wilsrich.component';

describe('CampusWilsrichComponent', () => {
  let component: CampusWilsrichComponent;
  let fixture: ComponentFixture<CampusWilsrichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampusWilsrichComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CampusWilsrichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
