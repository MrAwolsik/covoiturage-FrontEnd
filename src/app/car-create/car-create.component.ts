import { Component, OnInit } from '@angular/core';
import { Car } from '../model/car';

import { Observable } from 'rxjs/Observable';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css'] 
})
export class CarCreateComponent implements OnInit {

  newCar: Car = new Car();
  car: Car;

  constructor( private carService: CarService ) { }

  ngOnInit() {
  }

  onCreate(): void {
    this.carService.postCar(this.newCar).subscribe(car => this.car);

  }
  
}
