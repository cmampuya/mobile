import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-annonces-prov',
  templateUrl: 'annonces-prov.html',
})
export class AnnoncesProvPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnnoncesProvPage');
  }
	private getsearch(){
		this.navCtrl.push('SearchPage');
	}
		private doRefresh(refresher) {
		console.log('Begin async operation', refresher);

		setTimeout(() => {
		  console.log('Async operation has ended');
		  refresher.complete();
		}, 2000);
	}
}
