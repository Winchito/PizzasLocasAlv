import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'; 

@Injectable({
  providedIn: 'root'
})
export class UserstorageService {

  constructor(private fire: AngularFirestore) {}

  // Crear un usuario en la coleccion Usuarios
  createDoc(data: any, path: string, id: string){
    const collection = this.fire.collection(path);
    return collection.doc(id).set(data)
  }
getDoc<tipo>(path: string, id: string){
  return this.fire.collection(path).doc<tipo>(id).valueChanges()
}
  //Obtener los datos que se encuentran en la colección
  getCollection<tipo>(path: string){
    const collection = this.fire.collection<tipo>(path);
    return collection.valueChanges();
  }
  // Almacena los datos del usuario en Firestore
  storeUserData(userId: string, userData: any) {
    // return this.fire.collection('usuarios').doc(userId).set(userData);
  }
}
