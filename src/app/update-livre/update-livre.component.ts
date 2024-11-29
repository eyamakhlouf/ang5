import { Component, OnInit} from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { LivreService } from '../services/livre.service';
import { Livre } from '../model/livre.model';
import { Genre } from '../model/genre.model';
import { Image } from '../model/image.model';
//import { Genre } from '../model/genre.model';

@Component({
  selector: 'app-update-livre',
  templateUrl: './update-livre.component.html',
  styles: [
  ]
})
export class UpdateLivreComponent implements OnInit{
  
  currentLivre = new Livre();
  genres! : Genre[];
  updatedGenId! : number;
  myImage! : string;
  uploadedImage!: File;
  isImageUpdated: Boolean=false;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private livreService: LivreService) {}
  
  
 /*ngOnInit(): void {
    //console.log(this.activatedRoute.snapshot.params.id);
    //this.genres = this.livreService.listeGenres();

    this.livreService.consulterLivre(this.activatedRoute.snapshot.params['id']).subscribe( (liv: Livre) =>{ this.currentLivre = liv; } ) ;
    //this.updatedGenId=this.currentLivre.genre.idGen;
    //console.log(this.currentLivre);}
  }*/
  /*ngOnInit(): void {
    this.livreService.listeGenres().
    subscribe(gens => {console.log(gens);this.genres = gens._embedded.genres;
    
    });
    this.livreService.consulterLivre(this.activatedRoute.snapshot.params['id']).
    subscribe( liv =>{ this.currentLivre = liv;
    this.updatedGenId =
    this.currentLivre.genre.idGen;
    } ) ;
    }*/
    /*ngOnInit(): void {
      this.livreService.listeGenres().subscribe((gens: { _embedded: { genres: Genre[]; }; }) => {this.genres = gens._embedded.genres;
        console.log(gens);
        });
        this.livreService.consulterLivre(this.activatedRoute.snapshot.params['id']).
        subscribe( (liv: Livre) =>{ this.currentLivre = liv;
        this.updatedGenId = liv.genre.idGen;
        this.livreService
        .loadImage(this.currentLivre.image.idImage)
        .subscribe((img: Image) => {
        this.myImage = 'data:' + img.type + ';base64,' + img.image;
        });
        } ) ;
        }*/


        ngOnInit(): void {
          this.livreService.listeGenres().
          subscribe(gens => {this.genres = gens._embedded.genres;
          });
          this.livreService.consulterLivre(this.activatedRoute.snapshot.params['id'])
          .subscribe( liv =>{ this.currentLivre = liv;
          this.updatedGenId = liv.genre.idGen;
          } ) ;
          }
          







  /*ngOnInit() {
      this.livreService.listeGenres().
      subscribe(gens => {console.log(gens);
        this.genres = gens._embedded.genres;
      });
     
    this.livreService.consulterLivre(this.activatedRoute.snapshot.params['id']).
     subscribe( (liv: Livre) =>{ this.currentLivre = liv;
                                this.updatedGenId =this.currentLivre.genre.idGen;
       } ) ;
    }*/


  /*updateLivre()
{ //console.log(this.currentProduit);
  //this.currentLivre.genre=this.livreService.consulterGenre(this.updatedGenId);
this.livreService.updateLivre(this.currentLivre).subscribe((liv: any) => {
  this.router.navigate(['livres']); })

}*/
/*updateLivre() {
  this.currentLivre.genre = this.genres.find(gen => gen.idGen == this.updatedGenId)!;
  this.livreService.updateLivre(this.currentLivre).subscribe((liv: any) => {
  this.router.navigate(['livres']); }
  );
  }*/
  /*updateLivre() {
    this.currentLivre.genre = this.genres.find(gen => gen.idGen ==
    this.updatedGenId)!;
    //tester si l'image du produit a été modifiée
    if (this.isImageUpdated)
    {
    this.livreService
    .uploadImage(this.uploadedImage, this.uploadedImage.name)
    .subscribe((img: Image) => {
    this.currentLivre.image = img;
    this.livreService
    .updateLivre(this.currentLivre)
    .subscribe((liv) => {
    this.router.navigate(['livres']);
    });
    });
    }
    else{
    this.livreService
    .updateLivre(this.currentLivre)
    .subscribe((liv) => {
    this.router.navigate(['livres']);
    });
    }
    }*/

    updateLivre() {
      this.currentLivre.genre = this.genres.find(gen => gen.idGen ==
      this.updatedGenId)!;
      this.livreService
      .updateLivre(this.currentLivre)
      .subscribe((liv) => {
      this.router.navigate(['livres']);
      });
      }



  onImageUpload(event: any) {
    if(event.target.files && event.target.files.length) {
    this.uploadedImage = event.target.files[0];
    this.isImageUpdated =true;
    const reader = new FileReader();
    reader.readAsDataURL(this.uploadedImage);
    reader.onload = () => { this.myImage = reader.result as string; };
    }
    } 

    onAddImageLivre() {
      this.livreService
      .uploadImageLiv(this.uploadedImage,
      this.uploadedImage.name,this.currentLivre.idLivre)
      .subscribe( (img : Image) => {
      this.currentLivre.images.push(img);
      });
      }


      supprimerImage(img: Image){
        let conf = confirm("Etes-vous sûr ?");
        if (conf)
        this.livreService.supprimerImage(img.idImage).subscribe(() => {
        //supprimer image du tableau currentProduit.images
        const index = this.currentLivre.images.indexOf(img, 0);
        if (index > -1) {
        this.currentLivre.images.splice(index, 1);
        }
        });
        }

 

}
