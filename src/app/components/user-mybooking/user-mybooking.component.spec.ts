import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMybookingComponent } from './user-mybooking.component';

describe('UserMybookingComponent', () => {
  let component: UserMybookingComponent;
  let fixture: ComponentFixture<UserMybookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMybookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMybookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
