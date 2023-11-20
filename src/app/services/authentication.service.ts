import { Injectable, NgZone } from '@angular/core';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { InteractionService } from './interaction.service';
@Injectable({
  providedIn: 'root',
})

export class AuthenticationService {

  constructor(public afStore: AngularFirestore, public ngFireAuth: AngularFireAuth, public router: Router, public ngZone: NgZone, private interaction: InteractionService) {}

  // Login con email y contraseña
  SignIn(email: string, password: string) {
    return this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }
  // Registrar usuario con email y contraseña
  RegisterUser(datos:User) {
    return this.ngFireAuth.createUserWithEmailAndPassword(datos.email, datos.password);
  }

  // Verificación por email cuando el usuario se registra por primera vez
  SendVerificationMail() {
    return this.ngFireAuth.currentUser.then((user: any) => {
      return user.sendEmailVerification().then(() => {
        this.router.navigate(['verificar-email']);
      });
    });
  }

  stateUser(){
    return this.ngFireAuth.authState
  }

  async getUid(){
    const user = await this.ngFireAuth.currentUser;
    return user?.uid
  }

  // Recuperar contrase­ña
  PasswordRecover(passwordResetEmail: any) {
    return this.ngFireAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        this.interaction.presentToast('Se ha enviado un correo para recuperar la contraseña al Email establecido, revisa tu bandeja de entrada.')
      })
      .catch((error) => {
        this.interaction.presentToast("Correo Electronico inválido");
      });
  }

  // Devuelve true cuando el usuario inicio sesión
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user !== null && user.emailVerifiedemailVerified !== false ? true : false;
  }

  // Devuelve true cuando el email del usuario esta verificado
  get isEmailVerified(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.emailVerified !== false ? true : false;
  }
  
  AuthLogin(provider: any) {
    return this.ngFireAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['logout']);
        });
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  // Guardar el usuario en el LocalStorage
  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afStore.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      nombre: '',
      password: '',
      perfil: 'usuario'
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  // Cerrar sesión
  SignOut() {
    return this.ngFireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
      this.interaction.presentToast('Sesión finalizada.')
    });
  }
}

