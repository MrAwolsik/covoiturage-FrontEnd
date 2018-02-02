import { Injectable } from '@angular/core';
import { Car } from './model/car';

@Injectable()
export class CarService {

  constructor() { }

  getCars(): Car[] {
    return [
      { id: 1, model: "207", numberOfPlaces: 5 },
      { id: 2, model: "Golf", numberOfPlaces: 3 },
      { id: 3, model: "Megane", numberOfPlaces: 4 }
    ]
  }

}
