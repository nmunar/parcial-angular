import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../class/car';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private apiUrl: string = environment.baseUrl;

  // eslint-disable-next-line @angular-eslint/prefer-inject
  constructor(private htttp: HttpClient) {}

  getCars(): Observable<Car[]> {
    return this.htttp.get<Car[]>(`${this.apiUrl}`);
  }
}
