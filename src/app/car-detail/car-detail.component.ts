import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core'

import { Car } from '../model/car';

import { CarService } from '../car.service';

import { Observable } from 'rxjs/Observable';

import { componentRefresh } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  @Input() car: Car;
  @Output() onPopup = new EventEmitter<boolean>();

  constructor( private carService: CarService ) { }

  onUpdate() {
    this.carService.updateCar(this.car).subscribe(car => this.car);
    this.onPopup.emit(false);
  }

  onDelete(car: Car): void {
    this.carService.deleteCar(this.car).subscribe(car => this.car);
    this.onPopup.emit(false);
  }

  ngOnInit() {
  }

}
