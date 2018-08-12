import { NgModule }                         from '@angular/core';
import { CommonModule }                     from '@angular/common';

import { IonicModule }                      from '@ionic/angular';
import { HomePage }                       from './home.page';
import { HomePageRoutingModule }            from './home.routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomePageRoutingModule,
    IonicModule
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
