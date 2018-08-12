import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { LoadingPage } from './loading.page';
import { LoadingPageRoutingModule } from './loading.page.routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    LoadingPageRoutingModule
  ],
  declarations: [LoadingPage]
})
export class LoadingModule { }
