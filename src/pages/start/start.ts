import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
	selector: 'page-start',
	templateUrl: 'start.html',
})
export class StartPage {

	loading: Loading;
	registerCredentials = { email: '', password: '' };
  
	constructor(private navCtrl: NavController, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
	}

	public createAccount() {
		this.navCtrl.push('RegisterPage');
	}
	/*openPage(page) {
		this.navCtrl.setRoot(page);
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad StartPage');
	}*/
	
	public login() {
		this.showLoading()
		this.auth.login(this.registerCredentials).subscribe(allowed => {
			if (allowed) {        
				this.navCtrl.setRoot('MenuPage');
				//this.navCtrl.push('HomePage');
			}else {
				this.showError("Access Denied");
			}
		},
		error => {
			this.showError(error);
		});
	}
	
	showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
	}
	
	showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
	}
}
