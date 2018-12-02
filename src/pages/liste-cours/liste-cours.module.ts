import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListeCoursPage } from './liste-cours';

@NgModule({
  declarations: [
    ListeCoursPage,
  ],
  imports: [
    IonicPageModule.forChild(ListeCoursPage),
  ],
})
export class ListeCoursPageModule {}
