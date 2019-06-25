import { Component, OnInit } from '@angular/core';
import {ArtistasService} from '../artistas.service';
import {GenerosService} from '../generos.service';
import {MusicasService} from '../musicas.service';
import { take, skip, map } from 'rxjs/operators';


@Component({
  selector: 'app-estatisticas',
  templateUrl: './estatisticas.component.html',
  styleUrls: ['./estatisticas.component.css']
})
export class EstatisticasComponent implements OnInit {
  musicas = null;
  artistas = null;
  generos = null;
  artista = null;

  constructor(private musicas$: MusicasService, private artistas$: ArtistasService, private generos$: GenerosService) { }

  ngOnInit() {
    this.musicas$.lista()
      .pipe(
        map(musicas => musicas.slice(0, 4))
      )
      .subscribe(musicas => this.musicas = musicas);

    this.artistas$.lista()
      .pipe(
        map(musicas => musicas.slice(0, 4))
      )
      .subscribe(artistas => this.artistas = artistas);

    this.generos$.lista()
      .pipe(
        map(generos => generos.slice(0, 4))
      )
      .subscribe(generos => this.generos = generos);
  }

  encontrar(){
    this.artistas$.mais().subscribe(resultado => this.artista = resultado);
  }

}
