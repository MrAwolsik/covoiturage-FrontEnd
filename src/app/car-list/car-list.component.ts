import { Component, OnInit } from '@angular/core';
import { Car } from '../model/car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  //Variables
  nomListe = "BroumBroum (voitures)";
  cars: Car[] = [
    { id: 1, model: "207", numberOfPlaces: 5 },
    { id: 2, model: "Golf", numberOfPlaces: 3 },
    { id: 3, model: "Megane", numberOfPlaces: 4 }
  ];
  selectedCar:Car;

  //
  constructor() { }

  //
  ngOnInit() {
  }

  //Save this.car when clicOnIt
  onSelect(car: Car): void {
    console.log("selected car: ", car);
    this.selectedCar = car;
  }

}