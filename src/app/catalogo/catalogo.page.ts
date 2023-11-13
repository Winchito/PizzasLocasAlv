import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { MenuController} from '@ionic/angular';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {

  constructor(public authService: AuthenticationService) { }
  
  ngOnInit() {
    
  }
  
}