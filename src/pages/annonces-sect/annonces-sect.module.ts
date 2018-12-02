import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnnoncesSectPage } from './annonces-sect';

@NgModule({
  declarations: [
    AnnoncesSectPage,
  ],
  imports: [
    IonicPageModule.forChild(AnnoncesSectPage),
  ],
})
export class AnnoncesSectPageModule {}
