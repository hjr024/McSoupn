import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.page.html',
  styleUrls: ['./myaccount.page.scss'],
})
export class MyaccountPage {
  constructor(public alertCtrl: AlertController) { } 
  async showRemove() { 
  const confirm = await this.alertCtrl.create({ 
  header: 'Confirmation', 
  message: 'Do you want to remove this from your bookmark recipe?', 
  buttons: [
  { 
  text: 'Ok',
  role: 'Ok', 
  handler: () => {
  console.log('Confirm Ok'); 
  } 
  }, 
  { 
  text: 'Cancel', 
  role: 'Cancel',
  handler: () => { 
  console.log('Confirm Cancel.');
  } 
  } 
  ] 
  }); 
  await confirm.present(); 
  } 

}
