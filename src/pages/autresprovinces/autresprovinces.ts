import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AutresprovincesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-autresprovinces',
  templateUrl: 'autresprovinces.html',
})
export class AutresprovincesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AutresprovincesPage');
  }
	private getAnnoncesRameaux(){
		this.navCtrl.setRoot('AnnoncesPage');
	}
}
