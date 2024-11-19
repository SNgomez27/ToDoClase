import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(
      private router: Router
  ) {
  }
  goPagPrincipal() {
    this.router.navigate(['pagprinci']);
  }
  goPagLogin() {
    this.router.navigate(['login']);
  }
}
