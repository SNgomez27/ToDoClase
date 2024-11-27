import {Component, OnInit} from '@angular/core';
import {MostrarProductoService} from "../services/mostrar-producto.service";
import {ProductoInterfaz} from "../services/producto-interfaz";

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.scss'
})
export class DetalleProductoComponent implements OnInit {
  producto: ProductoInterfaz|null = null;
constructor(
    private mostrarProductoService: MostrarProductoService,
) {}

  ngOnInit(): void {
  this.mostrarProductoService.verProducto$.subscribe(valor =>
  this.producto=(valor));
    }
}
