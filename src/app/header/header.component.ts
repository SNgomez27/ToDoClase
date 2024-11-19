import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(
      private router: Router
  ) {
  }
  showNav: boolean = false;
  toggleNav() {
    this.showNav = !this.showNav;
  }
  goPagLogin() {
    this.router.navigate(['login']);
  }
}
