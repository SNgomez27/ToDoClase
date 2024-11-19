import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {LayoutSinHeaderComponent} from "./layout-sin-header/layout-sin-header.component";
import {LayoutconHeaderComponent} from "./layoutcon-header/layoutcon-header.component";
import {PagprinciComponent} from "./pagprinci/pagprinci.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  {
    path:"", component:LayoutSinHeaderComponent, children:[
        {path:"", component:LoginComponent},
        {path:"login", component:LoginComponent},
        {path:"register", component:RegisterComponent},
    ]},
    {path:"", component:LayoutconHeaderComponent, children:[
            {path:"pagprinci", component:PagprinciComponent},
        ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
