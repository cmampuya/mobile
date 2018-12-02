import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnnoncesRamPage } from './annonces-ram';

@NgModule({
  declarations: [
    AnnoncesRamPage,
  ],
  imports: [
    IonicPageModule.forChild(AnnoncesRamPage),
  ],
})
export class AnnoncesRamPageModule {}
