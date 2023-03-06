import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailshotelComponent } from './detailshotel.component';

describe('DetailshotelComponent', () => {
  let component: DetailshotelComponent;
  let fixture: ComponentFixture<DetailshotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailshotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailshotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
