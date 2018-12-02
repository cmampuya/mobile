import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListeActivitesPage } from './liste-activites';

@NgModule({
  declarations: [
    ListeActivitesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListeActivitesPage),
  ],
})
export class ListeActivitesPageModule {}
