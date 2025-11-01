import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CarListComponent } from './car-list.component';
import { CarService } from '../../services/car.service';
import { Car } from '../../class/car';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';

describe('CarListComponent', () => {
  let component: CarListComponent;
  let fixture: ComponentFixture<CarListComponent>;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let debug: DebugElement;

  const mockCars: Car[] = [
    {
      marca: 'Toyota',
      linea: 'Corolla',
      referencia: 'Sedan',
      modelo: 2018,
      kilometraje: 2000,
      color: 'Blanco',
      imagen: '',
    },
    {
      marca: 'Honda',
      linea: 'Civic',
      referencia: 'Sedan',
      modelo: 2019,
      kilometraje: 15000,
      color: 'Rojo',
      imagen: '',
    },
    {
      marca: 'Toyota',
      linea: 'Camry',
      referencia: 'Sedan',
      modelo: 2020,
      kilometraje: 70000,
      color: 'Negro',
      imagen: '',
    },
  ];

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('CarService', ['getCars']);
    spy.getCars.and.returnValue(of(mockCars));

    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [CarListComponent],
      providers: [CarService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a table with 3 rows and the header', () => {
    component.cars = mockCars;
    fixture.detectChanges();
    const table = fixture.nativeElement.querySelector('table');
    const rows = table.querySelectorAll('tr');

    expect(table).toBeTruthy();
    expect(rows.length).toBe(4);

    const headerRow = rows[0];
    expect(headerRow.querySelector('th')).toBeTruthy();

    const dataRows = table.querySelectorAll('tbody tr');
    expect(dataRows.length).toBe(3);
  });
});
