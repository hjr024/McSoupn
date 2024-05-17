import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alltimefav',
  templateUrl: './alltimefav.page.html',
  styleUrls: ['./alltimefav.page.scss'],
})
export class AlltimefavPage {
  constructor(public alertCtrl: AlertController) { } 
  async showFav() { 
  const confirm = await this.alertCtrl.create({ 
  header: 'Confirmation', 
  message: 'Do you want to add this recipe in your favorites?', 
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
