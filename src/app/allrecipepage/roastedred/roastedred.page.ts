import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-roastedred',
  templateUrl: './roastedred.page.html',
  styleUrls: ['./roastedred.page.scss'],
})
export class RoastedredPage {
  constructor(public alertCtrl: AlertController) { } 
  async showBook() { 
  const confirm = await this.alertCtrl.create({ 
  header: 'Confirmation', 
  message: 'Do you want to add this to your bookmark recipe?', 
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
  async showSave() { 
    const confirm = await this.alertCtrl.create({ 
    header: 'Confirmation', 
    message: 'Do you want to save this recipe?', 
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
