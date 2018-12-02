import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnnoncesProvPage } from './annonces-prov';

@NgModule({
  declarations: [
    AnnoncesProvPage,
  ],
  imports: [
    IonicPageModule.forChild(AnnoncesProvPage),
  ],
})
export class AnnoncesProvPageModule {}
