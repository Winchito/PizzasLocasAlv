import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-home-usuario-loggeado',
  templateUrl: './home-usuario-loggeado.page.html',
  styleUrls: ['./home-usuario-loggeado.page.scss'],
})
export class HomeUsuarioLoggeadoPage implements OnInit {
  
  constructor(public authService: AuthenticationService) {}

  ngOnInit() {
    
  }


}