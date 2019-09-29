import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PesquisarJogadorPage } from '../pesquisar-jogador/pesquisar-jogador';
import { EstatisticasPage } from '../estatisticas/estatisticas';

@Component({
  selector: 'page-cadastrar-estatisticas',
  templateUrl: 'cadastrar-estatisticas.html'
})
export class CadastrarEstatisticasPage {

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
