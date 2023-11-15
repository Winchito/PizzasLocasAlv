import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public authService: AuthenticationService, public router: Router) { }

  ngOnInit() {
  }
  logIn(email: any, password: any) {

    this.authService
      .SignIn(email.value, password.value)
      .then((): any => {
        if (this.authService.isEmailVerified) {
          this.router.navigate(['logout']);
        } else {
          window.alert('¡El correo no esta verificado!');
          return false;
        }
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

}