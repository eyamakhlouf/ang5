import { Component } from '@angular/core';
import { Genre } from '../model/genre.model';
import { Livre } from '../model/livre.model';
import { LivreService } from '../services/livre.service';

@Component({
  selector: 'app-recherche-par-genre',
  templateUrl: './recherche-par-genre.component.html',
  styles: [
  ]
})
export class RechercheParGenreComponent {
  livres! : Livre[];
  IdGenre! : number;
  genres! : Genre[];
  constructor(private livreService : LivreService) { }
  ngOnInit(): void {
    this.livreService.listeGenres().
    subscribe(gens => {this.genres = gens._embedded.genres;
    console.log(gens);
    });}

    onChange() {
      this.livreService.rechercherParGenre(this.IdGenre).
      subscribe(livs =>{this.livres=livs});
      }
}
