import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContacusComponent } from './contacus/contacus.component';

const routes: Routes = [
  {
    path: '',
    component: ContacusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
