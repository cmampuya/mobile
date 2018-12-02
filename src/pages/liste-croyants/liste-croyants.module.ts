import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListeCroyantsPage } from './liste-croyants';

@NgModule({
  declarations: [
    ListeCroyantsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListeCroyantsPage),
  ],
})
export class ListeCroyantsPageModule {}
