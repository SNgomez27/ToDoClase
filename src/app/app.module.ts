import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LayoutSinHeaderComponent } from './layout-sin-header/layout-sin-header.component';
import { LayoutconHeaderComponent } from './layoutcon-header/layoutcon-header.component';
import { RegisterComponent } from './register/register.component';
import { PagprinciComponent } from './pagprinci/pagprinci.component';
import { PagtareaComponent } from './pagtarea/pagtarea.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LayoutSinHeaderComponent,
    LayoutconHeaderComponent,
    RegisterComponent,
    PagprinciComponent,
    PagtareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
