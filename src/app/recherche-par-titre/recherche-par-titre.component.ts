import { Component } from '@angular/core';
import { Livre } from '../model/livre.model';
import { LivreService } from '../services/livre.service';

@Component({
  selector: 'app-recherche-par-titre',
  templateUrl: './recherche-par-titre.component.html',
  styles: [
  ]
})
export class RechercheParTitreComponent {
  livres! : Livre[];
  titreLivre! : string;

  allLivres! : Livre[];
  searchTerm!: string;
  ngOnInit(): void {
  this.livreService.listeLivre().subscribe(livs => {
  console.log(livs);
  this.allLivres = livs;
  });
  }
  onKeyUp(filterText : string){
  this.livres = this.allLivres.filter(item =>
  item.titreLivre.toLowerCase().includes(filterText));
  }
  

  constructor(private livreService : LivreService) { }
  rechercherLivs(){
    this.livreService.rechercherParTitre(this.titreLivre).
    subscribe(livs => {
    this.livres = livs;
    console.log(livs)});
    }
}
