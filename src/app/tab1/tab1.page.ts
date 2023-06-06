import { Component } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router'
import { IFilme } from '../model/IFilme';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  constructor(public router: Router, 
              public alertController: AlertController, 
              public toastController: ToastController) {}

  listaFilmes: IFilme[] = [
    {
      nome: 'Viúva Negra',
      lancamento: '08/07/2021 (BR)',
      duracao: '2h15m',
      classificacao: 7,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rKq1Vlw0Bqe2EEvdmIkkkgPQAGf.jpg',
      generos: ['Ação', 'Ficção Científica', 'Aventura'],
      pagina: '/viuva',
      favorito: false
    },
    {
      nome: 'Vingadores: Ultimato (2019)',
      lancamento: '25/04/2019 (BR)',
      duracao: '3h01m',
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg',
      generos: ['Aventura', 'Ficção científica', 'Ação'],
      pagina: '/avengers',
      favorito: false
    },
    {
      nome: 'Sherlock Holmes',
      lancamento: '08/08/2010 (BR)',
      duracao: '2h09m',
      classificacao: 7,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/19ZNLpF6ibwcFIynGb65X3Z1bnL.jpg',
      generos: ['Ação', 'Crime','Mistério', 'Aventura'],
      pagina: '/holmes',
      favorito: false
    },
    {
      nome: 'Run!',
      lancamento: '02/04/2021 (BR)',
      duracao: '1h44m',
      classificacao: 7,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rEeTuQSsEyM2bSG7rwvm23WJjfg.jpg',
      generos: ['Drama', 'Thriller', 'Terror'],
      pagina: '/run',
      favorito: false
    },
    {
      nome: 'Madagascar 3: Os Procurados',
      lancamento: '07/06/2012 (BR)',
      duracao: '1h33m',
      classificacao: 7,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bPRvFj9MGeLeqidaTniUf8yQ0PW.jpg',
      generos: ['Animação','Família', 'Comédia','Aventura'],
      pagina: '/madagascar',
      favorito: false
    },
    {
      nome: 'Os Smurfs e a Vila Perdida',
      lancamento: '06/04/2017 (BR)',
      duracao: '1h30m',
      classificacao: 6,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7DtiMnR55uSRIUAaIpnEMwYdGFD.jpg',
      generos: ['Animação','Família', 'Comédia','Aventura'],
      pagina: '/40dn',
      favorito: false
    },
    {
      nome: 'Smile',
      lancamento: '29/09/2022 (BR)',
      duracao: '1h55m',
      classificacao: 7,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/aDTXsc8uzJuvPLvfFBXTf9rYyTf.jpg',
      generos: ['Mistério', 'Thriller', 'Terror'],
      pagina: '/smile',
      favorito: false
    },
    {
      nome: '40 days & 40 nights',
      lancamento: '30/05/2002 (BR)',
      duracao: '1h36m',
      classificacao: 5,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/c0EdiB7bnGswLrHpeyLHAZkhONx.jpg',
      generos: ['Comédia', 'Romance'],
      pagina: '/40dn',
      favorito: false
    }

  ];

  exibirFilme(filme: IFilme){
    const navigationExtras: NavigationExtras = {state:{paramFilme:filme}};
    this.router.navigate(['filme-detalhe'], navigationExtras); //chama o navigate e pega a q vc vai abrir com os dados do filme, por isso navigationExtras (ele ta sendo declarado e define um state parametro para a navegação) 
  }


  async exibirAlertaFavorito(filme: IFilme) {
    const alert = await this.alertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            filme.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            filme.favorito=true;
            this.apresentarToast(filme);
          }
        }
      ]
    });
    await alert.present();
  }

  async apresentarToast(filme: IFilme) {
      const toast = await this.toastController.create({
        message: 'Filme adicionado aos favoritos...',
        duration: 3000,
        color: 'success',
        buttons: [
          {
            text: 'Desfazer',
            handler: () => {
              filme.favorito = false;
            }
          }
        ]
      });
      toast.present();
    }

}

