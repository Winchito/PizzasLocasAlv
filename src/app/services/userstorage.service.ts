import { Injectable } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/'; 

@Injectable({
  providedIn: 'root'
})
export class UserstorageService {

  constructor(private fire: AngularFirestoreModule) {}

  // Almacena los datos del usuario en Firestore
  storeUserData(userId: string, userData: any) {
    // return this.fire.collection('usuarios').doc(userId).set(userData);
  }
}
