import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { ListeCroyantsPage } from '../liste-croyants/liste-croyants';
import { AnnoncesPage } from '../annonces/annonces';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Nav } from 'ionic-angular';
 
export interface PageInterface {
  title: string;
  pageName: string;
  icon?: string;
  tabComponent?: any;
  index?: number;
}
 
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  // Basic root for our content view
  rootPage = 'HomePage';
  //rootPage = 'TabsPage';
 
  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;
 
  pages: PageInterface[] = [
    { title: 'Accueil', pageName: 'HomePage', icon: 'home' },
	{ title: 'Activités', pageName: 'TabsPage', tabComponent: 'AnnoncesPage', index: 0,  icon: 'bookmarks' },
	{ title: 'Exhortations', pageName: 'ExhortationsPage', icon: 'book' },
	{ title: 'Cours', pageName: 'CoursPage', icon: 'eye' },
	{ title: 'Contactez Nous', pageName: 'ContactPage', icon: 'send' },
  ];
 
   admpages: PageInterface[] = [
	{ title: 'Ajouter un croyant', pageName: 'AjouterCroyantPage', icon: 'bookmarks' },
    { title: 'Liste Croyants', pageName: 'ListeCroyantsPage', icon: 'bookmarks' },
	{ title: 'Liste Activités', pageName: 'ListeActivitesPage', icon: 'bookmarks' },
	{ title: 'Liste Exhortations', pageName: 'ListeExhortationsPage', icon: 'book' },
	{ title: 'Liste Cours', pageName: 'ListeCoursPage', icon: 'book' },
  ];
  
  constructor(public navCtrl: NavController) { }
 

  openPage(page: PageInterface) {
    let params = {};
 
    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
    }
 
    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
      // Tabs are not active, so reset the root page 
      // In this case: moving to or from SpecialPage
      this.nav.setRoot(page.pageName, params);
    }
  }
 
  isActive(page: PageInterface) {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNav();
 
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'secondary';
      }
      return;
    }
 
    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'secondary';
    }
    return;
  }
 	public deconnexion(){
		this.navCtrl.setRoot('StartPage');
	}
	public getprofil(){
		this.navCtrl.push('ProfilPage');
	}
}