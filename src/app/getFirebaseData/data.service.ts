import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: AngularFirestore) { }


  
  getDataOrders(){
    return this.firestore.collection("chargingStation").snapshotChanges();
  }



}
