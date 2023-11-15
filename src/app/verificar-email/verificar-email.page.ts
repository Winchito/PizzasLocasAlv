import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-verificar-email',
  templateUrl: './verificar-email.page.html',
  styleUrls: ['./verificar-email.page.scss'],
})

export class VerificarEmailPage implements OnInit {

  constructor(public authService: AuthenticationService) { }

  ngOnInit() {
  }

}
