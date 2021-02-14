import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContacusComponent } from './contacus/contacus.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ContacusComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ReactiveFormsModule
  ]
})
export class ContactModule { }
