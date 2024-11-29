import { Component , OnInit } from '@angular/core';
import { Livre } from '../model/livre.model';
import { LivreService } from '../services/livre.service';
import { Genre } from '../model/genre.model';
import { Router } from '@angular/router';
import { Image } from '../model/image.model';
@Component({
  selector: 'app-add-livre',
  templateUrl: './add-livre.component.html',
  styleUrls: ['./add-livre.component.css']
})
export class AddLivreComponent {
  newLivre = new Livre();
  genres! :Genre[];
  newIdGen! : number;
  newGenre! : Genre;
  uploadedImage!: File;
  imagePath: any;
  constructor(private livreService:LivreService,private router :Router){ }

  ngOnInit(): void {
    this.livreService.listeGenres().
subscribe((gens: { _embedded: { genres: Genre[]; }; }) => {this.genres = gens._embedded.genres;
  console.log(gens);
});





    //this.genres=this.livreService.listeGenres();
    /*.
    subscribe(gens => {console.log(gens);
      this.genres = gens._embedded.genres;
    });*/
    } 
  /*addLivre(){
    //console.log(this.newLivre);
    //this.livreService.ajouterLivre(this.newLivre);
    
      //console.log(this.newLivre);
      this.newGenre = this.livreService.consulterGenre(this.newIdGen);
      this.newLivre.genre = this.newGenre;
      this.livreService.ajouterLivre(this.newLivre);
      this.router.navigate(['livres']);
      
}*/
/*addLivre(){
  this.newLivre.genre = this.genres.find(gen => gen.idGen == this.newIdGen)!;
  this.livreService.ajouterLivre(this.newLivre)
  .subscribe(liv => {
  console.log(liv);
  this.router.navigate(['livres']);
  });
  }*/
 /*addLivre() {
    this.livreService
      .uploadImage(this.uploadedImage, this.uploadedImage.name)
      .subscribe((img: Image) => {
        this.newLivre.image = img;
        this.newLivre.genre = this.genres.find(gen => gen.idGen== this.newIdGen)!;
        this.livreService
          .ajouterLivre(this.newLivre)
          .subscribe(() => {
            this.router.navigate(['livres']);
          });
      });}*/

      addLivre() {
        this.newLivre.genre = this.genres.find(gen => gen.idGen == this.newIdGen)!;
       
       
       this.livreService.ajouterLivre(this.newLivre).subscribe((l) => {
      this.livreService.uploadImageLiv(this.uploadedImage,this.uploadedImage.name,l.idLivre).subscribe((img : Image) => {});
        this.router.navigate(['livres']);
      });
      }



      /*addLivre(){
        this.newLivre.genre = this.genres.find(gen => gen.idGen
        == this.newIdGen)!;
        this.livreService
        .ajouterLivre(this.newLivre)
        .subscribe((liv) => {
        this.livreService
        .uploadImageFS(this.uploadedImage,
        this.uploadedImage.name,liv.idLivre)
        .subscribe((response: any) => {}
        );
        this.router.navigate(['livres']);
        });
        }*/
        


/*addLivre(){
  this.livreService.ajouterLivre(this.newLivre)
  .subscribe(liv => {
  console.log(liv);
  this.router.navigate(['livres']);
  });
  }*/

  onImageUpload(event: any) {
    this.uploadedImage = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(this.uploadedImage);
    reader.onload = (_event) => { this.imagePath = reader.result; }
    }
    
    
  
}
