import { LoginPage } from './../pages/login/login';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { JogadorPage } from '../pages/jogador/jogador';
import { CadastrarJogadorPage } from '../pages/cadastrar-jogador/cadastrar-jogador';
import { EquipePage } from '../pages/equipe/equipe';
import { CadastrarEquipePage } from '../pages/cadastrar-equipe/cadastrar-equipe';
import { EstatisticasPage } from '../pages/estatisticas/estatisticas';
import { PesquisarJogadorPage } from '../pages/pesquisar-jogador/pesquisar-jogador';
import { SaudePage } from '../pages/saude/saude';


import { InicioPage } from '../pages/inicio/inicio';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    private _rootPage: any = LoginPage;
  public get rootPage(): any {
    return this._rootPage;
  }
  public set rootPage(value: any) {
    this._rootPage = value;
  }

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToInicio(params){
    if (!params) params = {};
    this.navCtrl.setRoot(InicioPage);
  }goToJogador(params){
    if (!params) params = {};
    this.navCtrl.setRoot(JogadorPage);
  }goToCadastrarJogador(params){
    if (!params) params = {}; 
    this.navCtrl.setRoot(CadastrarJogadorPage);
  }goToEquipe(params){
    if (!params) params = {};
    this.navCtrl.setRoot(EquipePage);
  }goToCadastrarEquipe(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CadastrarEquipePage);
  }goToEstatisticas(params){
    if (!params) params = {};
    this.navCtrl.setRoot(EstatisticasPage);
  }goToPesquisarJogador(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PesquisarJogadorPage);
  }goToSaude(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SaudePage);
  }
}
