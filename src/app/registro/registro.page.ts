import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(public authService: AuthenticationService, public router: Router) { }

  ngOnInit() {
  }

  signUp(email: any, password: any) {
    this.authService
      .RegisterUser(email.value, password.value)
      .then((res) => {
         this.authService.SendVerificationMail()
        this.router.navigate(['verify-email']);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

}
