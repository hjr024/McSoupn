import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage {
  constructor(public alertCtrl: AlertController) { } 
  async showRemove() { 
    const confirm = await this.alertCtrl.create({ 
    header: 'Confirmation', 
    message: 'Do you wish to remove this saved recipe?', 
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