import { TestBed } from '@angular/core/testing';
import { CarService } from './car.service';
import { environment } from '../../../environments/environment.development';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('Service: Car', () => {
  let service: CarService;
  let httpMock: HttpTestingController;
  const apiUrl = environment.baseUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CarService],
    });
    service = TestBed.inject(CarService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verifies that no requests are outstanding
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should handle error when getting cars list fails', () => {
    const errorMessage = 'An error occurred';

    service.getCars().subscribe({
      error: (error) => {
        expect(error.status).toBe(500);
        expect(error.statusText).toBe('Internal Server Error');
      },
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(errorMessage, {
      status: 500,
      statusText: 'Internal Server Error',
    });
  });
});
