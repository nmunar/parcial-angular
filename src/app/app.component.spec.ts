import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActorsModule } from './actors/actors.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './car/components/car-list/car-list.component';
import { DirectorListComponent } from './directors/components/director-list/director-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieModule } from './car/car.module';
import { GenreListComponent } from './genre-list/genre-list.component';
import { FormsModule } from '@angular/forms';
import { DirectorsModule } from './directors/directors.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ActorsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MovieModule,
        GenreListComponent,
        FormsModule,
        DirectorsModule,
      ],
      declarations: [AppComponent, MovieListComponent, DirectorListComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  xit(`should have as title 'front'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('front');
  });

  xit('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-genre-list')).toBeTruthy();
  });
});
