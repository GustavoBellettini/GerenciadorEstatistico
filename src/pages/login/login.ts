import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';
import { JogadorPage } from '../jogador/jogador';
import { CadastrarJogadorPage } from '../cadastrar-jogador/cadastrar-jogador';
import { EquipePage } from '../equipe/equipe';
import { CadastrarEquipePage } from '../cadastrar-equipe/cadastrar-equipe';
import { EstatisticasPage } from '../estatisticas/estatisticas';
import { PesquisarJogadorPage } from '../pesquisar-jogador/pesquisar-jogador';
import { SaudePage } from '../saude/saude';
import { ContaPage } from '../conta/conta';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }
  goToInicio(params){
    if (!params) params = {};
    this.navCtrl.push(InicioPage);
  }goToJogador(params){
    if (!params) params = {};
    this.navCtrl.push(JogadorPage);
  }goToCadastrarJogador(params){
    if (!params) params = {};
    this.navCtrl.push(CadastrarJogadorPage);
  }goToEquipe(params){
    if (!params) params = {};
    this.navCtrl.push(EquipePage);
  }goToCadastrarEquipe(params){
    if (!params) params = {};
    this.navCtrl.push(CadastrarEquipePage);
  }goToEstatisticas(params){
    if (!params) params = {};
    this.navCtrl.push(EstatisticasPage);
  }goToPesquisarJogador(params){
    if (!params) params = {};
    this.navCtrl.push(PesquisarJogadorPage);
  }goToSaude(params){
    if (!params) params = {};
    this.navCtrl.push(SaudePage);
  }goToConta(params){
    if (!params) params = {};
    this.navCtrl.push(ContaPage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }
}
