import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-pagprinci',
  templateUrl: './pagprinci.component.html',
  styleUrl: './pagprinci.component.scss'
})
export class PagprinciComponent {
  constructor(
      private router: Router
  ) {
  }
  goPagNewTarea() {
    this.router.navigate(['pagtarea']);
  }

}
