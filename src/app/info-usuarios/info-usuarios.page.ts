import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { UserstorageService } from '../services/userstorage.service';
import { AuthenticationService } from '../services/authentication.service';



@Component({
  selector: 'app-info-usuarios',
  templateUrl: './info-usuarios.page.html',
  styleUrls: ['./info-usuarios.page.scss'],
})
export class InfoUsuariosPage implements OnInit {
  datos: User[] = [];
  
  constructor(private fire: UserstorageService , public authService: AuthenticationService) {}
  ngOnInit() {
      this.getDatos();   
  }

  getDatos(){
    this.fire.getCollection<User>('Usuarios').subscribe(res =>{
      this.datos = res;
  })
}
}
