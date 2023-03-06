import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivityTourComponent } from './add-activity-tour.component';

describe('AddActivityTourComponent', () => {
  let component: AddActivityTourComponent;
  let fixture: ComponentFixture<AddActivityTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddActivityTourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddActivityTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
