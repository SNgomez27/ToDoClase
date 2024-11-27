import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {LayoutSinHeaderComponent} from "./layout-sin-header/layout-sin-header.component";
import {LayoutconHeaderComponent} from "./layoutcon-header/layoutcon-header.component";
import {PagprinciComponent} from "./pagprinci/pagprinci.component";
import {RegisterComponent} from "./register/register.component";
import {PagtareaComponent} from "./pagtarea/pagtarea.component";
import {DetalleProductoComponent} from "./detalle-producto/detalle-producto.component";
import {ProductoComponent} from "./producto/producto.component";

const routes: Routes = [
  {
    path:"", component:LayoutSinHeaderComponent, children:[
        {path:"", component:LoginComponent},
        {path:"login", component:LoginComponent},
        {path:"register", component:RegisterComponent},
          {path:"pagtarea", component:PagtareaComponent},
    ]},
    {path:"", component:LayoutconHeaderComponent, children:[
            {path:"pagprinci", component:PagprinciComponent},
            {path:"productos", component:ProductoComponent},
            {path:"detalle-producto", component:DetalleProductoComponent},

        ]},
    {path:"productos", component:ProductoComponent},
    {path:"detalle-producto", component:DetalleProductoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
