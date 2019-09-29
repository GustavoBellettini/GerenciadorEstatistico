import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastrarJogadorPage } from '../cadastrar-jogador/cadastrar-jogador';

@Component({
  selector: 'page-jogador',
  templateUrl: 'jogador.html'
})
export class JogadorPage {

  constructor(public navCtrl: NavController) {
  }
  goToCadastrarJogador(params){
    if (!params) params = {};
    this.navCtrl.push(CadastrarJogadorPage);
  }goToJogador(params){
    if (!params) params = {};
    this.navCtrl.push(JogadorPage);
  }
}
