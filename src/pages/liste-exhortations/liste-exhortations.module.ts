import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListeExhortationsPage } from './liste-exhortations';

@NgModule({
  declarations: [
    ListeExhortationsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListeExhortationsPage),
  ],
})
export class ListeExhortationsPageModule {}
