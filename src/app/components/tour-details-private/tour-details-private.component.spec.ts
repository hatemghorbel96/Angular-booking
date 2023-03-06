import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourDetailsPrivateComponent } from './tour-details-private.component';

describe('TourDetailsPrivateComponent', () => {
  let component: TourDetailsPrivateComponent;
  let fixture: ComponentFixture<TourDetailsPrivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourDetailsPrivateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourDetailsPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
