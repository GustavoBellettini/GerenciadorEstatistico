import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EquipePage } from '../equipe/equipe';

@Component({
  selector: 'page-cadastrar-equipe',
  templateUrl: 'cadastrar-equipe.html'
})
export class CadastrarEquipePage {

  constructor(public navCtrl: NavController) {
  }
  goToEquipe(params){
    if (!params) params = {};
    this.navCtrl.push(EquipePage);
  }goToCadastrarEquipe(params){
    if (!params) params = {};
    this.navCtrl.push(CadastrarEquipePage);
  }
}
