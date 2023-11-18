import { Component, OnInit} from '@angular/core';
import { User } from '../interfaces/user';
import { UserstorageService } from '../services/userstorage.service';
import { AuthenticationService } from '../services/authentication.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';



@Component({
  selector: 'app-info-usuarios',
  templateUrl: './info-usuarios.page.html',
  styleUrls: ['./info-usuarios.page.scss'],
})
export class InfoUsuariosPage implements OnInit {
  datos: User[] = [];
  numeroUsuarios: number | undefined;

  constructor(private fire: UserstorageService , public authService: AuthenticationService, private afAuth: AngularFireAuth) {}
   
  ngOnInit() {
      this.getDatos();  
      this.obtenerNumeroUsuarios(); 
  }

  getDatos(){
    this.fire.getCollection<User>('Usuarios').subscribe(res =>{
      this.datos = res;
  })

}
obtenerNumeroUsuarios() {

  this.afAuth.authState.subscribe((user) => {
    if (user) {
      this.fire.getCollection<User>('Usuarios').subscribe((querySnapshot: any) => {
          this.numeroUsuarios = querySnapshot.length;
        });
    }
  });
}
}