import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltaClienteComponent } from '../clientes/alta-cliente/alta-cliente.component';
import { ListadoClientesComponent } from '../clientes/listado-clientes/listado-clientes.component';
import { Routes } from '@angular/router';

const routes: Routes =[
  {path:'altasClientes', component: AltaClienteComponent},
  {path:'listadoClientes',component:ListadoClientesComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
