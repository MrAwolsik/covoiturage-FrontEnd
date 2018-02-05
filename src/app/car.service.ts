import { Injectable } from '@angular/core';
import { Car } from './model/car';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CarService {

  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
  };

  constructor( private http: HttpClient ) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>("http://localhost:8080/cars");
  }
  postCar(car: Car): Observable<Car> {
    return this.http.post<Car>("http://localhost:8080/cars", car, this.httpOptions);
  }
  updateCar(car: Car): Observable<Car> {
    return this.http.put<Car>("http://localhost:8080/cars/" + car.id, car, this.httpOptions);
  }

}
