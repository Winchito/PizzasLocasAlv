import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';



@Component({
  selector: 'app-pide-en-linea',
  templateUrl: './pide-en-linea.page.html',
  styleUrls: ['./pide-en-linea.page.scss'],
})
export class PideEnLineaPage implements OnInit {

  constructor(public authService: AuthenticationService) {}

  ngOnInit() {
    
  }

}