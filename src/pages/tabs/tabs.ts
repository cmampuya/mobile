import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root: any = 'HomePage';
  tab2Root: any = 'AnnoncesPage';
  tab3Root: any = 'AnnoncesPaysPage';
  tab4Root: any = 'AnnoncesProvPage';
  tab5Root: any = 'AnnoncesSectPage';
  tab6Root: any = 'AnnoncesRamPage';
  tab7Root: any = 'AnnoncesComPage';
  myIndex: number;
 
  constructor(navParams: NavParams) {
	// Set the active tab based on the passed index from menu.ts
	this.myIndex = navParams.data.tabIndex || 1;
  }
}
