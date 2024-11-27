import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {ProductoInterfaz} from "./producto-interfaz";

@Injectable({
  providedIn: 'root'
})
export class MostrarProductoService {
verProducto:BehaviorSubject<ProductoInterfaz| null>= new BehaviorSubject<ProductoInterfaz|null>(null);
verProducto$: Observable<ProductoInterfaz | null> = this.verProducto.asObservable()

  constructor() { }

  pintarProducto(producto:ProductoInterfaz|null){
  this.verProducto.next(producto);
  }

}
