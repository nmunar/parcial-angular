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
  modelCount: { marca: string; count: number }[] = [];

  // eslint-disable-next-line @angular-eslint/prefer-inject
  constructor(private carService: CarService) {
    /* empty */
  }
  getCars(): void {
    this.carService.getCars().subscribe((data: Car[]) => {
      this.cars = data || [];
      this.getTotalCars();
    });
  }

  ngOnInit() {
    this.getCars();
  }

  getTotalCars(): void {
    const countByModel = this.cars.reduce(
      (acc, car) => {
        acc[car.marca] = (acc[car.marca] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );

    this.modelCount = Object.entries(countByModel).map(([marca, count]) => ({
      marca,
      count,
    }));
  }
}
