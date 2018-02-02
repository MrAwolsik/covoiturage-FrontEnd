import { Component, OnInit } from '@angular/core';
import { Car } from '../model/car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  nomListe = "BroumBroum (voitures)";
  cars: Car[] = [
    { id: 1, model: "207", numberOfPlaces: 5 },
    { id: 2, model: "Golf", numberOfPlaces: 3 },
    { id: 3, model: "Megane", numberOfPlaces: 4 }
  ];

  constructor() { }

  ngOnInit() {
  }

}