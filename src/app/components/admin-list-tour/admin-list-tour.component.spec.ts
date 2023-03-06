import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListTourComponent } from './admin-list-tour.component';

describe('AdminListTourComponent', () => {
  let component: AdminListTourComponent;
  let fixture: ComponentFixture<AdminListTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminListTourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminListTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
