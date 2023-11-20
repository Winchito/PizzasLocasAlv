import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { InteractionService } from '../services/interaction.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public authService: AuthenticationService, public router: Router, private interaction: InteractionService) { }

  ngOnInit() {}
  logIn(email: any, password: any) {
    this.interaction.presentLoading('Ingresando...')
    this.authService.SignIn(email.value, password.value)
      .then((): any => {
        if (this.authService.isEmailVerified) {
          this.router.navigate(['home-usuario-loggeado']);
          this.interaction.closeLoading();
          this.interaction.presentToast('Ingreso exitoso.');
        } else {
          this.interaction.closeLoading();
          this.interaction.presentToast('¡El correo no esta verificado!');
        }
      })
      .catch((error) => {
        this.interaction.closeLoading();
        this.interaction.presentToast('Usuario o contraseña invalido.');
      });
  }

}
