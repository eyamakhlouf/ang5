import { Component, OnInit } from '@angular/core';
import { Image } from '../model/image.model';
import {Livre} from '../model/livre.model';
import { AuthService } from '../services/auth.service';
import { LivreService } from '../services/livre.service';
@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit{
  livres!: Livre[];
  apiurl:string='http://localhost:8081/livres/api';

  //livres : string[];
  
ngOnInit(): void {
    /*this.livreService.listeLivre().subscribe(livs=> {console.log(livs);
    this.livres = livs;
    });}*/
    this.chargerLivres();}

    

    /*chargerLivres(){
      this.livreService.listeLivre().subscribe(livs => {
      console.log(livs);
      this.livres = livs;
      });
      }*/
      /*chargerLivres(){
        this.livreService.listeLivre().subscribe(livs => {
        this.livres = livs;
        this.livres.forEach((liv) => {
        this.livreService
        .loadImage(liv.image.idImage)
        .subscribe((img: Image) => {
        liv.imageStr = 'data:' + img.type + ';base64,' + img.image;
        });
        });
        });
        }*/

        chargerLivres(){
          this.livreService.listeLivre().subscribe((livs: Livre[]) => {
          this.livres = livs;
          this.livres.forEach((liv) => {
          liv.imageStr = 'data:' + liv.images[0].type + ';base64,' +
          liv.images[0].image;
          });
          });
        }
        




        /*chargerLivres() {
          this.livreService.listeLivre().subscribe(livs => {
            this.livres = livs;
            this.livres.forEach((liv) => {
              if (liv.images && liv.images.length > 0 && liv.images[0].type && liv.images[0].image) {
                liv.imageStr = 'data:' + liv.images[0].type + ';base64,' + liv.images[0].image;
              } else {
                console.warn('Images manquantes ou données incorrectes pour le livre', liv);
                liv.imageStr = 'assets/default-image.png'; // Ajoutez une image par défaut si nécessaire
              }
            });
          });
        }*/
        


         /* chargerLivres(){
            this.livreService.listeLivre().subscribe(livs => {
            this.livres = livs;
            });
            }*/
            /*chargerLivres(){
              this.livreService.listeLivre().subscribe(livs=> {
              this.livres=  livs  ;
              this.livres.forEach(( liv ) => {
                 liv.imageStr = 'data:' +  liv.images[0].type + ';base64,' +  liv.images[0].image;
                });
              }); }  */   
            
        
      
    


constructor(private livreService:LivreService,
            public authService: AuthService) {//this.livres=livreService.listeLivres();
 }
  /*constructor() {
    this.livres = [
      {idLivre: 1,titreLivre: "L'Art de la guerre",
        auteur: "Sun Tzu",
        prixLivre: 19.99,
        datePublication: new Date("01/14/2011")
      },
      {
        idLivre: 2,
        titreLivre: "Le Petit Prince",
        auteur: "Antoine de Saint-Exupéry",
        prixLivre: 12.50,
        datePublication: new Date("12/17/2010")
      },
      {
        idLivre: 3,
        titreLivre: "1984",
        auteur: "George Orwell",
        prixLivre: 15.75,
        datePublication: new Date("02/20/2020")
      }
    ];}*/
  

 //this.livres=livreService.listeLivres(); 

/*supprimerLivre(l: Livre)
{
//console.log(l);
this.livreService.supprimerLivre(l);
let conf = confirm("Etes-vous sûr ?");
 if (conf)
 this.livreService.supprimerLivre(l);}*/


supprimerLivre(l: Livre)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.livreService.supprimerLivre(l.idLivre).subscribe(() => {
console.log("livre supprimé");
this.chargerLivres();
});
} 


    
}  