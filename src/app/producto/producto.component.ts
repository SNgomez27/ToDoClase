import { Component } from '@angular/core';
import {ProductoInterfaz} from "../services/producto-interfaz";
import {MostrarProductoService} from "../services/mostrar-producto.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent {
arrayProducto: ProductoInterfaz[] = [
  {id: 1, nombre:"Cocacola", precio:"1,3", stock:true},
  {id: 1, nombre:"Pan", precio:"1", stock:false},
  {id: 1, nombre:"Jamon", precio:"2", stock:true},
  {id: 1, nombre:"queso", precio:"1,8", stock:false},
  {id: 1, nombre:"fanta", precio:"1,4", stock:true}
]
  constructor(
      private mostrarProductoService: MostrarProductoService,
      private router: Router,
  ) {}
enviarProducto(producto: ProductoInterfaz){
  this.mostrarProductoService.pintarProducto(producto);
  this.router.navigate(['detalle-producto']);
}
}
