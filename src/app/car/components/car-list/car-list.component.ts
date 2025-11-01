import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Car } from '../../class/car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
})
export class CarListComponent implements OnInit {
  cars: Car[] = [];

  // eslint-disable-next-line @angular-eslint/prefer-inject
  constructor(private carService: CarService) {
    /* empty */
  }
  getCars(): void {
    this.carService.getCars().subscribe((data: Car[]) => {
      this.cars = data || [];
    });
  }
  ngOnInit() {
    this.getCars();
  }
}
