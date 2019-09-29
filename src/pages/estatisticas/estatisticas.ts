import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PesquisarJogadorPage } from '../pesquisar-jogador/pesquisar-jogador';

@Component({
  selector: 'page-estatisticas',
  templateUrl: 'estatisticas.html'
})
export class EstatisticasPage {

  constructor(public navCtrl: NavController) {
  }
  goToPesquisarJogador(params){
    if (!params) params = {};
    this.navCtrl.push(PesquisarJogadorPage);
  }goToEstatisticas(params){
    if (!params) params = {};
    this.navCtrl.push(EstatisticasPage);
  }
}
