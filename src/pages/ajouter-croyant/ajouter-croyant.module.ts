import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AjouterCroyantPage } from './ajouter-croyant';

@NgModule({
  declarations: [
    AjouterCroyantPage,
  ],
  imports: [
    IonicPageModule.forChild(AjouterCroyantPage),
  ],
})
export class AjouterCroyantPageModule {}
