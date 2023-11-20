import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InteractionService } from '../services/interaction.service';




@Component({
  selector: 'app-pide-en-linea',
  templateUrl: './pide-en-linea.page.html',
  styleUrls: ['./pide-en-linea.page.scss'],
})
export class PideEnLineaPage implements OnInit {

  tipoVia: string = '';
  numero: string = '';
  complemento1: string = '';
  complemento2: string = '';
  barrio: string = '';
  tipoInmueble: string = '';
  bloqueInterior: string = '';
  detallesAdicionales: string = '';
  instruccionesRepartidor: string = '';

  

  constructor(private router: Router, private interaction: InteractionService) {}

  ngOnInit() {
    
  }

  onSubmit() {
    if (!this.isValidForm()) {
      this.interaction.presentToast('Completa los valores requeridos!');
    }else{

    // Redirigir al menú y pasar los datos como parámetros de ruta
    this.router.navigate(['/catalogo-pedido']
    , {
      queryParams: {
        tipoVia: this.tipoVia,
        numero: this.numero,
        complemento1: this.complemento1,
        complemento2: this.complemento2,
        barrio: this.barrio,
        tipoInmueble: this.tipoInmueble,
        bloqueInterior: this.bloqueInterior,
        detallesAdicionales: this.detallesAdicionales,
        instruccionesRepartidor: this.instruccionesRepartidor,
      },
    });
  }
}

  isValidForm(): boolean {
    // Realizar validaciones personalizadas aquí
    // Por ejemplo, verificar que al menos un campo de complemento esté lleno
    return !!(this.complemento1 && this.complemento1.trim() !== '') && !!(this.complemento2 && this.complemento2.trim() !== '')
     && !!(this.tipoVia && this.tipoVia.trim() !== '') && !!(this.numero && this.numero.trim() !== '');
  }
}
  
  