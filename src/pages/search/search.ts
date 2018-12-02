import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
	private getAutresProvinces(){
		this.navCtrl.push('AutresprovincesPage');
	}
	
	private getAutresSecteurs(){
		this.navCtrl.push('AutressecteursPage');
	}
	
	private getAutresRameaux(){
		this.navCtrl.push('AutresrameauxPage');
	}
	
	private getAnnoncesProvinces(){
		this.navCtrl.setRoot('AnnoncesPage');
	}
	
	private getAnnoncesSecteurs(){
		this.navCtrl.setRoot('AnnoncesPage');
	}
	
	private getAnnoncesRameaux(){
		this.navCtrl.setRoot('AnnoncesPage');
	}
}
