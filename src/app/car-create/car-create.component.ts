import { Component, OnInit } from '@angular/core';
import { Car } from '../model/car';

import { Observable } from 'rxjs/Observable';
import { CarService } from '../car.service';
import { Router } from '@angular/router';
import { CarListComponent } from '../car-list/car-list.component';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css'] 
})
export class CarCreateComponent implements OnInit {

  newCar: Car = new Car();
  car: Car;

  constructor(private carService: CarService, private router: Router ) { }

  ngOnInit() {
  }

  onCreate(): void {
    this.carService.postCar(this.newCar).subscribe(car => this.car);
    this.router.navigateByUrl("car-list");
  }
}
