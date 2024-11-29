import { Component, OnInit } from '@angular/core';
import { Genre } from '../model/genre.model';
import { LivreService } from '../services/livre.service';

@Component({
  selector: 'app-liste-genres',
  templateUrl: './liste-genres.component.html',
  styles: [
  ]
})
export class ListeGenresComponent implements OnInit{
  
    genres! : Genre[];
    updatedGen:Genre = {"idGen":0,"nomGen":""};
   
ajout:boolean=true;



    constructor(private livreService : LivreService) { }
    ngOnInit(): void {
    this.chargerGenres();
    }


    chargerGenres(){
      this.livreService.listeGenres().
      subscribe(gens => {this.genres = gens._embedded.genres;
      console.log(gens);
      });
      }

    genreUpdated(gen : Genre)
    {console.log("genre recu du composant update Genre",gen);
    this.livreService.ajouterGenre(gen).
    subscribe( ()=> this.chargerGenres());
   }

   updateGen(gen:Genre) {
    this.updatedGen=gen;
    this.ajout=false; 
    }
    

}
