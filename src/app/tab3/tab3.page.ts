import { Component } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router'
import { IAtores } from '../model/IAtores';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {

  constructor(public router: Router) {}

  listaAtores: IAtores[] = [
    {
      nomeA: 'Scarlett Johansson',
      cartazA: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/uRxO44O5KjGBlP5xq3a6U0azp1H.jpg',
      filmeA: ['Viúva Negra', 'Vingadores: Ultimato (2019)'],
      paginaA: '/scarlett-johansson',
      ocupacaoA: 'Atriz'
    },
    {
      nomeA: 'Robert Downey Jr.',
      cartazA: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/im9SAqJPZKEbVZGmjXuLI4O7RvM.jpg',
      filmeA: ['Sherlock Holmes', 'Vingadores: Ultimato (2019)'],
      paginaA: '/robert-downey-jr.',
      ocupacaoA: 'Ator'
    },
    {
      nomeA: 'Kiera Allen',
      cartazA: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/e3wOaDBdTEZccu38hUgHVFQBS7D.jpg',
      filmeA: ['Run!', 'The Good Doctor'],
      paginaA: '/kiera-allen',
      ocupacaoA: 'Atriz'
    },
    {
      nomeA: 'Alexandre Moreno',
      cartazA: 'https://static.wixstatic.com/media/540723_dba6ae51a8064da28365bb48139b0c13~mv2.jpg/v1/crop/x_0,y_511,w_1080,h_1080/fill/w_560,h_560,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/foto%20al%C3%AA%20site%203.jpg',
      filmeA: ['Madagascar 3', 'Greys Anatomy'],
      paginaA: '/',
      ocupacaoA: 'Dublador'
    },
    {
      nomeA: 'Ricardo Juarez',
      cartazA: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90TLv9HnvwVZVs4dl86v8_2qW_nB9slnwTLws6KYqroH-z35zJWUhYerD7IrsuiJMAL4&usqp=CAU',
      filmeA: ['Madagascar 3', 'Smurfs'],
      paginaA: '/',
      ocupacaoA: 'Dublador'
    },
    {
      nomeA: 'Jessie T. Usher',
      cartazA: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/iiu9dkYEkHJPMf7TzbrhhgwRvlt.jpg',
      filmeA: ['Smile', 'The Boys'],
      paginaA: '/jessie-t-usher',
      ocupacaoA: ''
    },
    {
      nomeA: 'Josh Hartnett',
      cartazA: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/9JS3PeypxTmHVXOnLCMRzJzySxO.jpg',
      filmeA: ['40 days & 40 nights'],
      paginaA: '/josh-hartnett',
      ocupacaoA: 'Ator'
    },
    {
      nomeA: 'Patrick Dempsey',
      cartazA: 'https://m.media-amazon.com/images/M/MV5BMTM4NzExNTAxN15BMl5BanBnXkFtZTcwNzA4MTU5MQ@@._V1_FMjpg_UX1000_.jpg',
      filmeA: ['Greys Anatomy'],
      paginaA: '/patrick-dempsey',
      ocupacaoA: 'Ator'
    },
    {
      nomeA: 'Joseph Morgan',
      cartazA: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/rlmFE3aeKjHQ5jRhqcHtf0LYTLG.jpg',
      filmeA: ['The Originals', 'The Vampire Diaries'],
      paginaA: '/cillian-murphy',
      ocupacaoA: 'Ator'
    },
    {
      nomeA: 'Ikue Otani',
      cartazA: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/my8LBLQ4MsK4hRz1PAATIqtieaI.jpg',
      filmeA: ['One Piece'],
      paginaA: '/ikue-otani',
      ocupacaoA: 'Dubladora'
    },
    {
      nomeA: 'Ian Somerhalder',
      cartazA: 'https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSAWNKKCt6t7Ogh7gA_s9Wl07t-qB5QcFM4purYfxmW9IRWqqTD5jpEJ7pAwMAUPiKc',
      filmeA: ['The Vampire Diaries', 'Lost'],
      paginaA: '/ian-somehalder',
      ocupacaoA: 'Ator'
    },
    {
      nomeA: 'Cillian Murphy',
      cartazA: 'https://metro.co.uk/wp-content/uploads/2016/08/468926481-e1471083867537.jpg?quality=90&strip=all&zoom=1&resize=480%2C361',
      filmeA: ['The Vampire Diaries', 'Lost'],
      paginaA: '/cillian-murphy',
      ocupacaoA: 'Ator'
    },
    
  ];

  exibirAtor(ator: IAtores){
    const navigationExtras: NavigationExtras = {state:{paramAtor:ator}};
    this.router.navigate(['ator-detalhe'], navigationExtras); //chama o navigate e pega a q vc vai abrir com os dados do filme, por isso navigationExtras (ele ta sendo declarado e define um state parametro para a navegação) 
  }

}