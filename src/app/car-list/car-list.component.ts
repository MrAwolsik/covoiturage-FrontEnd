import { Component, OnInit } from '@angular/core';
import { Car } from '../model/car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  // Constructor
  constructor(private carService: CarService) { }

  //Variables
  nomListe = "BroumBroum (voitures)";
  cars: Car[];
  selectedCar: Car;

  //
  ngOnInit() {
    this.cars = this.carService.getCars();
  }

  //Save this.car when clicOnIt
  onSelect(car: Car): void {
    console.log("selected car: ", car);
    this.selectedCar = car;
  }

}