import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutAdminComponent } from './pages/layout-admin/layout-admin.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { SuscribeFormComponent } from './components/suscribe-form/suscribe-form.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FooterComponent, 
    LayoutAdminComponent, 
    HeaderComponent,
    LayoutComponent,
    SuscribeFormComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
  ]
})
export class LayoutModule { }
