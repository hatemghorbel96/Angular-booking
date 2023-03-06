import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListHotelComponent } from './admin-list-hotel.component';

describe('AdminListHotelComponent', () => {
  let component: AdminListHotelComponent;
  let fixture: ComponentFixture<AdminListHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminListHotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminListHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
