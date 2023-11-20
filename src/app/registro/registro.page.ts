import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { UserstorageService } from '../services/userstorage.service';
import { InteractionService } from '../services/interaction.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  datos: User ={
    nombre: '',
    email: '',
    uid: null,
    password: '',
    emailVerified: false,
    perfil: 'usuario'
  }
  constructor(public authService: AuthenticationService, public router: Router, private fire: UserstorageService, private interaction: InteractionService) { }

  ngOnInit() {}

  signUp() {
    this.interaction.presentLoading('Registrando...')
    this.authService.RegisterUser(this.datos)
      .then((res) => {

        //this.authService.SendVerificationMail()
        this.router.navigate(['login']);
        const path = 'Usuarios';
        const id =  res.user?.uid;
        this.datos.uid = id!;
        this.datos.password = ''
        this.fire.createDoc(this.datos, path, id!)
        this.interaction.closeLoading();
        //this.interaction.presentToast('Verifica tu email.')
        this.interaction.presentToast('Inicia Sesión.')
      })
      .catch((error) => {
        this.interaction.closeLoading();
        this.interaction.presentToast('Datos invalidos.')
      });
  }

}
