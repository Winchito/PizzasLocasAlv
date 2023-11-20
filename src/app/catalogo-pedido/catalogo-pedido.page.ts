
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-catalogo-pedido',
  templateUrl: './catalogo-pedido.page.html',
  styleUrls: ['./catalogo-pedido.page.scss'],
})
export class CatalogoPedidoPage implements OnInit {

  direccionCompleta: string = '';
  instruccionesRepartidor: string = '';


  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {


        // Obtener los parámetros de la URL
        const direccionVia = this.route.snapshot.queryParamMap.get('tipoVia') || '';
        const direccionNumero = this.route.snapshot.queryParamMap.get('numero') || '';
        const direccionComplemento1 = this.route.snapshot.queryParamMap.get('complemento1') || '';
        const direccionComplemento2 = this.route.snapshot.queryParamMap.get('complemento2') || '';
        const direccionBarrio = this.route.snapshot.queryParamMap.get('barrio') || '';
        const tipoInmueble = this.route.snapshot.queryParamMap.get('tipoInmueble') || '';
        const bloqueInterior = this.route.snapshot.queryParamMap.get('bloqueInterior') || '';
        const detallesAdicionales = this.route.snapshot.queryParamMap.get('detallesAdicionales') || '';
        const instruccionesRepartidor = this.route.snapshot.queryParamMap.get('instruccionesRepartidor') || ''; 
    
        // Concatenar los componentes de la dirección
        this.direccionCompleta = `${direccionVia} ${direccionNumero} # ${direccionComplemento1} - ${direccionComplemento2}. ${tipoInmueble} ${bloqueInterior} ${detallesAdicionales}, ${direccionBarrio}`;
  }

  submitForm() {

    // Filtra las pizzas seleccionadas
    const selectedTamanoPizza = this.tamanoPizza.filter((tamanoPizza) => tamanoPizza.selected);
    const selectedSaborPizza = this.saborPizza.filter((saborPizza) => saborPizza.selected);
    const selectedBebidaPizza = this.bebidaPizza.filter((bebidaPizza) => bebidaPizza.selected);
    const selectedadicionalPizza = this.adicionalPizza.filter((adicionalPizza) => adicionalPizza.selected);
    const direccionEnviada = this.direccionCompleta;

    // Extrae los valores que se quieren
    const selectedPizzaNames = selectedSaborPizza.map((pizza) => {
      return{
        name: pizza.name,
        price: pizza.price,
        url: pizza.URL
      }
        });
    const selectedBebidaNames = selectedBebidaPizza.map((bebida) => {
      return{
        name: bebida.name,
        price: bebida.price,
        url: bebida.URL
      }
        });
    const selectedTamanoNames = selectedTamanoPizza.map((tamano) => {
      return{
        name: tamano.name,
        price: tamano.price,
        url: tamano.URL
      }
        });
    const selectedAdicionalNames = selectedadicionalPizza.map((adicional) => {
      return{
        name: adicional.name,
        price: adicional.price,
        url: adicional.URL
      }
        });

      localStorage.setItem('selectedPizzaInfo', JSON.stringify(selectedPizzaNames));
      localStorage.setItem('selectedBebidaInfo', JSON.stringify(selectedBebidaNames));
      localStorage.setItem('selectedTamanosInfo', JSON.stringify(selectedTamanoNames));
      localStorage.setItem('selectedAdicionalInfo', JSON.stringify(selectedAdicionalNames));
      localStorage.setItem('selectedAdicionalInfo', JSON.stringify(selectedAdicionalNames));
      localStorage.setItem('direccionCompleta', JSON.stringify(direccionEnviada));
      localStorage.setItem('instruccionesRepartidor', JSON.stringify(this.instruccionesRepartidor));

    this.router.navigate(['/carrito-compras']);
  }

  selectPizza(index: number) {
    this.saborPizza.forEach((pizza, i) => {
      if (i !== index) {
        pizza.selected = false;
      }
    });
  }

  selectBebida(index: number) {
    this.bebidaPizza.forEach((pizza, i) => {
      if (i !== index) {
        pizza.selected = false;
      }
    });
  }

  selectTamano(index: number) {
    this.tamanoPizza.forEach((pizza, i) => {
      if (i !== index) {
        pizza.selected = false;
      }
    });
  }
  

  adicionalPizza = [
    { id: 1, name: 'Borde con Queso', price: 4000, selected: false, URL: "https://content-cocina.lecturas.com/medio/2022/01/12/pizza-papa-johns-pepperoni_64bd69fe_1200x1200.jpg" },
    { id: 2, name: 'Doble Queso', price: 6000,  selected: false, URL: "https://pbs.twimg.com/media/B_66g7tUQAAj8EH.jpg:large" },
    { id: 3, name: 'Jalapeños', price: 2500,  selected: false, URL: "https://s.cornershopapp.com/product-images/4456401.jpg?versionId=pTLQK2I43EAQLVfe5uXIrAGfZjdq2RjC" },
    { id: 4, name: 'Jamón', price: 4000, selected: false, URL: "https://sagal.com.co/cdn/shop/products/Jamon-Premium-de-Cerdo_grande.jpg?v=1608598839" },
    { id: 5, name: 'Salami', price: 3500, selected: false, URL: "https://images.squarespace-cdn.com/content/v1/5f19e52b36e37243e9978dce/1596042198558-0YKLW4KE40B76RFC9LL8/CRUDOSMADURADOS3.jpg" },
  ];

  tamanoPizza = [
    { id: 1, name: 'Pequeña (4 trozos)', price: 15000, selected: false, URL: "https://d4i7e0edqqgwm.cloudfront.net/documents/producto/420pepperoni-personal-5fb4318d7f6fa343145323.jpg1" },
    { id: 2, name: 'Mediana (6 trozos)', price: 20000, selected: false, URL: "https://blog.papajohns.com.gt/hs-fs/hubfs/Blogs%202023/Marzo/Pizzas%20al%20Chilazo/Pizza%20Mediana%20de%20Pepperoni.jpg?width=500&height=303&name=Pizza%20Mediana%20de%20Pepperoni.jpg" },
    { id: 3, name: 'Grande (8 trozos)', price: 25000, selected: false, URL: "https://www.pizzaiolo.mx/img/blog/pizza-hecha-de-varios-tipos-de-pizza-02%20(1).png" },
    { id: 4, name: 'Familiar (10 trozos)', price: 30000, selected: false, URL:"https://www.magazinedigital.cl/wp-content/uploads/2023/02/Super-Pepperoni_1.jpg" }
  ]

  saborPizza = [
    { id: 1, name: 'Carnes', price: 0, selected: false, URL: "https://assets.kraftfoods.com/recipe_images/opendeploy/123140_640x428.jpg"},
    { id: 2, name: 'Hawaiana', price: 2000, selected: false, URL: "https://elmen.pe/wp-content/uploads/2023/05/Pizza-hawaiana.jpg" },
    { id: 3, name: 'Napolitana', price: 2500, selected: false, URL: "https://mandolina.co/wp-content/uploads/2023/05/Pizza-Napolitana-Autentica.png" },
    { id: 4, name: 'Pollo y champiñones', price: 3000, selected: false, URL: "https://ilforno.co/cdn/shop/products/ecommerceilfornopizzapolloychampinones-Familiar_992x.png?v=1672240146" },
    { id: 5, name: 'Pepperoni', price: 3500, selected: false, URL: "https://images.ecestaticos.com/WJT0BFvdZ4poZa5PiFHuCXX2sTo=/0x0:2121x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F96f%2F563%2Fc84%2F96f563c8404ac8cd97c158887aa56ae1.jpg" },
  ]

  bebidaPizza = [
    { id: 1, name: 'Canada Dry 1.5L', price: 4500, selected: false, URL: "https://copservir.vtexassets.com/arquivos/ids/765000/GINGER-CANADA-DRY_F.png?v=637950273511400000" },
    { id: 2, name: 'Coca-Cola 1.5L', price: 5500, selected: false, URL: "https://licoreslarebaja.com/173-large_default/gaseosa-coca-cola-15ml.jpg" },
    { id: 3, name: 'Manzana Postobon 1.5L', price: 5500, selected: false, URL:"https://misaboracolombia.com/cdn/shop/products/Colombiana_la_nuestra_pet_3_125lt_800px_800x.png?v=1576124798" },
    { id: 4, name: 'Sprite 1.5L', price: 5000, selected: false, URL: "https://copservir.vtexassets.com/arquivos/ids/765422/GASEOSA-MANZANA-POSTOBON_F.png?v=637950275205400000" },
  ]


}
