import { Component, OnInit } from '@angular/core';
import { Car } from '../model/car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  nomListe = "BroumBroum (voitures)";
  car: Car = { id: 1, model: "207", numberOfPlaces: 5};

  constructor() { }

  ngOnInit() {
  }

}