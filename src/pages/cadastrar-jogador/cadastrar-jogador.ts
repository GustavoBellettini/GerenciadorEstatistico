import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { JogadorPage } from '../jogador/jogador';

@Component({
  selector: 'page-cadastrar-jogador',
  templateUrl: 'cadastrar-jogador.html'
})
export class CadastrarJogadorPage {

  constructor(public navCtrl: NavController) {
  }
  goToJogador(params){
    if (!params) params = {};
    this.navCtrl.push(JogadorPage);
  }goToCadastrarJogador(params){
    if (!params) params = {};
    this.navCtrl.push(CadastrarJogadorPage);
  }
}
