import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { InicioPage } from '../pages/inicio/inicio';
import { JogadorPage } from '../pages/jogador/jogador';
import { SaudePage } from '../pages/saude/saude';
import { EquipePage } from '../pages/equipe/equipe';
import { EstatisticasPage } from '../pages/estatisticas/estatisticas';
import { LoginPage } from '../pages/login/login';
import { ContaPage } from '../pages/conta/conta';
import { CadastrarJogadorPage } from '../pages/cadastrar-jogador/cadastrar-jogador';
import { CadastrarEquipePage } from '../pages/cadastrar-equipe/cadastrar-equipe';
import { PesquisarJogadorPage } from '../pages/pesquisar-jogador/pesquisar-jogador';
import { CadastrarEstatisticasPage } from '../pages/cadastrar-estatisticas/cadastrar-estatisticas';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    JogadorPage,
    SaudePage,
    EquipePage,
    EstatisticasPage,
    LoginPage,
    ContaPage,
    CadastrarJogadorPage,
    CadastrarEquipePage,
    PesquisarJogadorPage,
    CadastrarEstatisticasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    JogadorPage,
    SaudePage,
    EquipePage,
    EstatisticasPage,
    LoginPage,
    ContaPage,
    CadastrarJogadorPage,
    CadastrarEquipePage,
    PesquisarJogadorPage,
    CadastrarEstatisticasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}