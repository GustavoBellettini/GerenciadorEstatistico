import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastrarEquipePage } from '../cadastrar-equipe/cadastrar-equipe';

@Component({
  selector: 'page-equipe',
  templateUrl: 'equipe.html'
})
export class EquipePage {

  constructor(public navCtrl: NavController) {
  }
  goToCadastrarEquipe(params){
    if (!params) params = {};
    this.navCtrl.push(CadastrarEquipePage);
  }goToEquipe(params){
    if (!params) params = {};
    this.navCtrl.push(EquipePage);
  }
}
