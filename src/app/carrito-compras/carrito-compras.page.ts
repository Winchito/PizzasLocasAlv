import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.page.html',
  styleUrls: ['./carrito-compras.page.scss'],
})
export class CarritoComprasPage implements OnInit {

  selectedPizzasInfo: any
  selectedBebidasInfo: any
  selectedTamanoInfo: any
  selectedAdicionalesInfo: any
  storedDireccion: string = '';
  storedInstrucciones: string = '';
  selectedCompraInfo: any;
  precioTotal: number = 0;


  constructor(private router: Router) {}
  
  
  ngOnInit() {

  const storedPizzaData = localStorage.getItem('selectedPizzaInfo');
  this.selectedPizzasInfo = storedPizzaData ? JSON.parse(storedPizzaData) : [];

  const storeBebidasdData = localStorage.getItem('selectedBebidaInfo');
  this.selectedBebidasInfo = storeBebidasdData ? JSON.parse(storeBebidasdData) : [];

  const storedTamanoData = localStorage.getItem('selectedTamanosInfo');
  this.selectedTamanoInfo = storedTamanoData ? JSON.parse(storedTamanoData) : [];

  const storedAdicionalesData = localStorage.getItem('selectedAdicionalInfo');
  this.selectedAdicionalesInfo = storedAdicionalesData ? JSON.parse(storedAdicionalesData) : [];

  
  this.storedDireccion = JSON.parse(localStorage.getItem('direccionCompleta')!);
  this.storedInstrucciones = JSON.parse(localStorage.getItem('instruccionesRepartidor')!);

  this.selectedCompraInfo = [...this.selectedTamanoInfo, ...this.selectedPizzasInfo, ...this.selectedBebidasInfo, ...this.selectedAdicionalesInfo ]

  this.precioTotal = this.selectedCompraInfo.reduce((total: number, producto: any) => total + producto.price, 0);

  }

  pagoExitoso(){
    localStorage.clear()
    this.router.navigate(['/pago-existoso']);
  }

    
  }


