import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutAdminComponent } from './pages/layout-admin/layout-admin.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { SuscribeFormComponent } from './components/suscribe-form/suscribe-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutAuthComponent } from './pages/layout-auth/layout-auth.component';
import { SuscribeService } from './services/suscribe.service';


@NgModule({
  declarations: [
    FooterComponent,
    LayoutAdminComponent,
    HeaderComponent,
    LayoutComponent,
    SuscribeFormComponent,
    LayoutAuthComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [
    SuscribeService
  ]
})
export class LayoutModule { }
