import { Injectable } from '@angular/core';
import {AngularFirestore} from  '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor( public fireservices:AngularFirestore) { }
  createNewemployee(Record:any)
  {
    return new Promise<any>((_resolve,reject)=>{
      this.fireservices.collection('Employee').add(Record).then ((_res)=>{}, (err)=> reject(err));
      
    });
    
  }


  get_Allemployee()
  {
    return this.fireservices.collection('Employee').snapshotChanges();
  }
}


