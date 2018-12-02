import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AutressecteursPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-autressecteurs',
  templateUrl: 'autressecteurs.html',
})
export class AutressecteursPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AutressecteursPage');
  }
  	private getAnnoncesRameaux(){
		this.navCtrl.setRoot('AnnoncesPage');
	}

}
