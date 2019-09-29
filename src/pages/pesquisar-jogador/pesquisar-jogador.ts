import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EstatisticasPage } from '../estatisticas/estatisticas';

@Component({
  selector: 'page-pesquisar-jogador',
  templateUrl: 'pesquisar-jogador.html'
})
export class PesquisarJogadorPage {

  constructor(public navCtrl: NavController) {
  }
  goToEstatisticas(params){
    if (!params) params = {};
    this.navCtrl.push(EstatisticasPage);
  }goToPesquisarJogador(params){
    if (!params) params = {};
    this.navCtrl.push(PesquisarJogadorPage);
  }
}
