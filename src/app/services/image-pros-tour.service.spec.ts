import { TestBed } from '@angular/core/testing';

import { ImageProsTourService } from './image-pros-tour.service';

describe('ImageProsTourService', () => {
  let service: ImageProsTourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageProsTourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
