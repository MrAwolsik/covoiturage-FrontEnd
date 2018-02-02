import { Injectable } from '@angular/core';
import { Car } from './model/car';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CarService {

  constructor( private http: HttpClient ) { }

  getCars(): Observable<Car[]> {
      return this.http.get<Car[]>("http://localhost:8080/cars");
    }

}
