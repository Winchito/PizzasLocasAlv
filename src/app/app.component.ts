import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { UserstorageService } from './services/userstorage.service';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  uid: string = null!
  info: User | undefined;
  rol: 'administrador' | 'usuario' =null!;
  constructor(private fire: UserstorageService , public authService: AuthenticationService) {}
  ngOnInit() {
    this.authService.stateUser().subscribe(res =>{
      this.getUid();   
  });
}
 async getUid(){
  const uid = await this.authService.getUid();
  if(uid){
    this.uid = uid!;
  }this.getDatosUser();
}
  getDatosUser() {
    const path = 'Usuarios';
    const id = this.uid;
    this.fire.getDoc<User>(path, id!).subscribe(res =>{
      if (res){
        this.info = res;
        this.rol = res.perfil;
      }      
    })

}
}