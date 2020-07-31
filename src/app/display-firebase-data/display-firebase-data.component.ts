import { Component, OnInit } from '@angular/core';
import {DataService} from "../getFirebaseData/data.service";


@Component({
  selector: 'app-display-firebase-data',
  templateUrl: './display-firebase-data.component.html',
  styleUrls: ['./display-firebase-data.component.css']
})
export class DisplayFirebaseDataComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getChargingStations();
  }


  chargingStations = [];

  getChargingStations = () =>

  this.dataService.getDataOrders().subscribe(res => (this.chargingStations = res));



}
