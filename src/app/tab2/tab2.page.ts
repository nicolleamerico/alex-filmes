import { Component } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router'
import { ISerie } from '../model/ISerie';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public router: Router, 
    public alertController: AlertController, 
    public toastController: ToastController) {}

  listaSeries: ISerie[] = [
    {
      nomeS: 'Breaking Bad',
      lancamentoS: '20/01/2008 (BR)',
      temporadaS: '5 temporadas',
      classificacaoS: 9,
      cartazS: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/30erzlzIOtOK3k3T3BAl1GiVMP1.jpg',
      generosS: ['Drama', 'Crime'],
      paginaS: '/breaking-bad',
      favoritoS: false
    },
    {
      nomeS: 'One Piece',
      lancamentoS: '20/10/1999 (BR)',
      temporadaS: '1.061 Episodios',
      classificacaoS: 9,
      cartazS: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fcXdJlbSdUEeMSJFsXKsznGwwok.jpg',
      generosS: ['Action & Adventure', 'Comédia', 'Animação'],
      paginaS: '/one-piece',
      favoritoS: false
    },
    {
      nomeS: 'The Originals',
      lancamentoS: '13/10/2013 (BR)',
      temporadaS: '5 temporadas',
      classificacaoS: 9,
      cartazS: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/j4YEHjh1t9mHpdDwbqLCc04xBMY.jpg',
      generosS: ['Sci-Fi & Fantasy', 'Drama', 'Mistério'],
      paginaS: '/the-originals',
      favoritoS: false
    },
    {
      nomeS: 'Peaky Blinders',
      lancamentoS: '12/09/2013 (BR)',
      temporadaS: '6 temporadas',
      classificacaoS: 9,
      cartazS: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bGZn5RVzMMXju4ev7xbl1aLdXqq.jpg',
      generosS: ['Drama', 'Crime'],
      paginaS: '/mortal-kombat',
      favoritoS: false
    },
    {
      nomeS: 'Greys Anatomy',
      lancamentoS: '27/05/2005 (BR)',
      temporadaS: '19 temporadas',
      classificacaoS: 8,
      cartazS: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/diS4zWXohKIp9VuN9sJDRrqe5en.jpg',
      generosS: ['Drama Médico', 'Comédia', 'Romance'],
      paginaS: '/greys',
      favoritoS: false
    },
    {
      nomeS: 'Game of Thrones',
      lancamentoS: '17/04/2011 (BR)',
      temporadaS: '8 temporadas',
      classificacaoS: 8,
      cartazS: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg',
      generosS: ['Sci-Fi & Fantasy','Drama','Ação', 'Aventura'],
      paginaS: '/got',
      favoritoS: false
    },
    {
      nomeS: 'The Vampire Diaries',
      lancamentoS: '31/10/2010 (BR)',
      temporadaS: '7 temporadas',
      classificacaoS: 8,
      cartazS: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg',
      generosS: ['Ação','Drama','Sci-Fi & Fantasy','Aventura'],
      paginaS: '/the-walking-dead',
      favoritoS: false
    },
    {
      nomeS: 'The Vampire Diaries',
      lancamentoS: '10/09/2009 (BR)',
      temporadaS: '8 temporadas',
      classificacaoS: 8,
      cartazS: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lcGQaSrWkkxGuh0JJqyN2TkuNqb.jpg',
      generosS: ['Drama','Sci-Fi & Fantasy'],
      paginaS: '/the-vampire-diaries',
      favoritoS: false
    },
    {
      nomeS: 'Flash',
      lancamentoS: '07/10/2014 (BR)',
      temporadaS: '9 temporadas',
      classificacaoS: 8,
      cartazS: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lFxIoMKqkgTuxpghTPHBjoVstMV.jpg',
      generosS: ['Drama', 'Sci-Fi & Fantasy'],
      paginaS: '/flash',
      favoritoS: false
    },
    {
      nomeS: 'The Good Doctor',
      lancamentoS: '25/09/2017 (BR)',
      temporadaS: '6 temporadas',
      classificacaoS: 8,
      cartazS: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/v9WYk0nigzR9NAEjeSmfI6s4XA2.jpg',
      generosS: ['Drama'],
      paginaS: '/the-good-doctor',
      favoritoS: false
    },
    {
      nomeS: 'Lost',
      lancamentoS: '22/09/2004 (BR)',
      temporadaS: '6 temporadas',
      classificacaoS: 8,
      cartazS: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fZ8mx5IGVFPblgVRqY55QlQeICm.jpg',
      generosS: ['Action & Adventure', 'Mistério'],
      paginaS: '/lost',
      favoritoS: false
    },
    {
      nomeS: 'Arrow',
      lancamentoS: '10/10/2012 (BR)',
      temporadaS: '8 temporadas',
      classificacaoS: 7,
      cartazS: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oaLXsduGoDOOftWziIOvyZzrR4T.jpg',
      generosS: ['Crime', 'Drama', 'Mistério', 'Action & Adventure'],
      paginaS: '/lost',
      favoritoS: false
    },
    {
      nomeS: 'Mulher Hulk',
      lancamentoS: '18/08/2022 (BR)',
      temporadaS: '1 temporada',
      classificacaoS: 6,
      cartazS: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4xNH5hHPpTJptSWANyAX3OLZoNM.jpg',
      generosS: ['Sci-Fi & Fantasy', 'Comédia'],
      paginaS: '/lost',
      favoritoS: false
    }
  ];


  exibirSerie(serie: ISerie){
    const navigationExtras: NavigationExtras = {state:{paramSerie:serie}};
    this.router.navigate(['serie-detalhe'], navigationExtras); //chama o navigate e pega a q vc vai abrir com os dados do filme, por isso navigationExtras (ele ta sendo declarado e define um state parametro para a navegação) 
  }

  async exibirAlertaFavorita(serie: ISerie) {
    const alert = await this.alertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar a serie?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            serie.favoritoS=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            serie.favoritoS=true;
            this.apresentarToast(serie);
          }
        }
      ]
    });
    await alert.present();
  }

  async apresentarToast(serie: ISerie) {
      const toast = await this.toastController.create({
        message: 'Serie adicionado aos favoritos...',
        duration: 2000,
        color: 'success',
        buttons: [
          {
            text: 'Desfazer',
            handler: () => {
              serie.favoritoS = false;
            }
          }
        ]
      });
      toast.present();
    }
  

}
