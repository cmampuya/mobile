import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AutresrameauxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-autresrameaux',
  templateUrl: 'autresrameaux.html',
})
export class AutresrameauxPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AutresrameauxPage');
  }
	private getAnnoncesRameaux(){
		this.navCtrl.setRoot('AnnoncesPage');
	}
}
