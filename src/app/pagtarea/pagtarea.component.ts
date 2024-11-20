import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-pagtarea',
  templateUrl: './pagtarea.component.html',
  styleUrl: './pagtarea.component.scss'
})
export class PagtareaComponent {
  constructor(
      private router: Router
  ) {
  }
  goPagPrincipal() {
    this.router.navigate(['pagprinci']);
  }

}
