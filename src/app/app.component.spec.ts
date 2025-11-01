import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CarModule } from './car/car.module';
import { CarListComponent } from './car/components/car-list/car-list.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, CarModule],
      declarations: [AppComponent, CarListComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const appComponent = fixture.componentInstance;
    expect(appComponent).toBeTruthy();
  });

  xit(`should have as title 'front'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('TuSegundazo.com');
  });
});
