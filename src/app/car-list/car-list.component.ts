import { Component, OnInit } from '@angular/core';
import { Car } from '../model/car';
import { CarService } from '../car.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  //Constructor
  constructor(private carService: CarService) { }

  //Variables
  nomListe = "voitures";
  cars: Car[];
  selectedCar: Car;
  popup: boolean = false;

  //Do when init
  ngOnInit() {
    this.carService.getCars().subscribe(cars => this.cars = cars);
  }

  //Save this.car when clicOnIt
  onSelect(car: Car): void {
    this.selectedCar = car;
    this.popup = true;
  }

  closePopup($event) {
    this.popup = false;
    this.ngOnInit();
  }
}