import { Injectable } from '@angular/core';
import { Livre } from '../model/livre.model';
import { Genre } from '../model/genre.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GenreWrapper } from '../model/genreWrapped.model';
import { AuthService } from './auth.service';
import { Image } from '../model/image.model';

const httpOptions = {headers: new HttpHeaders( {'Content-Type': 'application/json'} )};

@Injectable({
  providedIn: 'root'
})
export class LivreService {
  livres!: Livre[];
//livre! : Livre;
//genres : Genre[];
apiURL: string = 'http://localhost:8091/livres/api';
apiURLGen: string = 'http://localhost:8091/livres/gen';

constructor(private http : HttpClient,
            private authService:AuthService) {
/*this.genres = [ {idGen : 1, nomGen : "Romance"},
{idGen : 2, nomGen : "Drame"}];*/

 
    /*this.livres = [
      {idLivre : 1, titreLivre : "Les miserables",auteur : "Victor Hugo", prixLivre : 3000.600, datePublication : new Date("01/14/2011"), genre : {idGen : 1, nomGen : "Romance"}},
      {idLivre : 2, titreLivre : "Causette",auteur : "Victor Hugo", prixLivre : 20.700, datePublication : new Date("01/14/2016"),genre : {idGen : 1, nomGen : "Romance"}},
      {idLivre : 3, titreLivre : "Les miserables",auteur : "James", prixLivre : 15.300, datePublication : new Date("01/14/1990"),genre : {idGen : 2, nomGen : "Drame"}}
       ];*/
      }
      /*listeLivres():Livre[]{
        return this.livres;*/
      
        /*listeLivre(): Observable<Livre[]>{
          let jwt = this.authService.getToken();
          jwt = "Bearer "+jwt;
          let httpHeaders = new HttpHeaders({"Authorization":jwt})
          return this.http.get<Livre[]>(this.apiURL+"/all",{headers:httpHeaders});
          }*/

          listeLivre(): Observable<Livre[]>{
            return this.http.get<Livre[]>(this.apiURL+"/all");
           }

          
            
        /*listeLivre(): Observable<Livre[]>{
        return this.http.get<Livre[]>(this.apiURL);
        }*/

        /*ajouterLivre( liv: Livre):Observable<Livre>{
          return this.http.post<Livre>(this.apiURL, liv, httpOptions);
          }*/
          ajouterLivre( liv: Livre):Observable<Livre>{
            let jwt = this.authService.getToken();
            jwt = "Bearer "+jwt;
            let httpHeaders = new HttpHeaders({"Authorization":jwt})
            return this.http.post<Livre>(this.apiURL+"/addliv", liv, {headers:httpHeaders});
            }
            


      /*ajouterLivre(liv:Livre){
      this.livres.push(liv);*/
    
    /*supprimerLivre( liv: Livre){
      //supprimer le produit prod du tableau produits
      const index = this.livres.indexOf(liv, 0);
      if (index > -1) {
      this.livres.splice(index, 1);
      }}*/
      //ou Bien
      /* this.produits.forEach((cur, index) => {
      if(prod.idProduit === cur.idProduit) {
      this.produits.splice(index, 1);
      }
      }); }*/
      /*supprimerLivre(id : number) {
        const url = `${this.apiURL}/${id}`;
        return this.http.delete(url, httpOptions);
        }*/
        supprimerLivre(id : number) {
          const url = `${this.apiURL}/delliv/${id}`;
          let jwt = this.authService.getToken();
          jwt = "Bearer "+jwt;
          let httpHeaders = new HttpHeaders({"Authorization":jwt})
          return this.http.delete(url, {headers:httpHeaders});
          }
          /*supprimerLivre(id: number) {
            const url = `${this.apiURL}/delliv/${id}`;
          
            return this.http.delete(url);
            }*/
        
          
        

      /*consulterLivre(id:number): Livre{
        this.livre = this.livres.find(l => l.idLivre == id)!;
        return this.livre;
        }*/

        /*consulterLivre(id: number): Observable<Livre> {
          const url = `${this.apiURL}/${id}`;
          return this.http.get<Livre>(url);
          }*/
          consulterLivre(id: number): Observable<Livre> {
            const url = `${this.apiURL}/getbyid/${id}`;
            let jwt = this.authService.getToken();
            jwt = "Bearer "+jwt;
            let httpHeaders = new HttpHeaders({"Authorization":jwt})
            return this.http.get<Livre>(url,{headers:httpHeaders});
            }
            

        trierLivres(){
          this.livres = this.livres.sort((n1,n2) =>{
            if (n1.idLivre! >n2.idLivre!) {
              return 1;
            }
            if (n1.idLivre! <n2.idLivre!) {
              return -1;
            }
            return 0;

          });
        }

        /*updateLivre(l:Livre)
        {
        // console.log(p);
        //this.supprimerLivre(l);
        this.ajouterLivre(l);
        this.trierLivres();
        }*/
        /*updateLivre(liv :Livre) : Observable<Livre>
        {
        return this.http.put<Livre>(this.apiURL, liv, httpOptions);
        }*/
        updateLivre(liv :Livre) : Observable<Livre> {
          let jwt = this.authService.getToken();
          jwt = "Bearer "+jwt;
          let httpHeaders = new HttpHeaders({"Authorization":jwt})
          return this.http.put<Livre>(this.apiURL+"/updateliv", liv, {headers:httpHeaders});
          }

        /*listeGenres():Observable<Genre[]>{
          return this.http.get<Genre[]>(this.apiURL+"/gen");
          }*/


        /*listeGenres():Genre[] {
          return this.genres;
          }

          
        consulterGenre(id:number): Genre{
          return this.genres.find(gen => gen.idGen == id)!;
          }  */

          listeGenres():Observable<GenreWrapper>{
            return this.http.get<GenreWrapper>(this.apiURLGen);
            }
    


            rechercherParGenre(idGen: number):Observable< Livre[]> {
              const url = `${this.apiURL}/livsgen/${idGen}`;
              return this.http.get<Livre[]>(url);
              }

              rechercherParTitre(titre: string):Observable< Livre[]> {
                const url = `${this.apiURL}/livsByTitle/${titre}`;
                return this.http.get<Livre[]>(url);
                }


    ajouterGenre( gen: Genre):Observable<Genre>{
      return this.http.post<Genre>(this.apiURLGen, gen, httpOptions);
      }

      uploadImage(file: File, filename: string): Observable<Image>{
        const imageFormData = new FormData();
        imageFormData.append('image', file, filename);
        const url = `${this.apiURL + '/image/upload'}`;
        return this.http.post<Image>(url, imageFormData);
        }
        loadImage(id: number): Observable<Image> {
        const url = `${this.apiURL + '/image/get/info'}/${id}`;
        return this.http.get<Image>(url);
        }


        uploadImageLiv(file: File, filename: string, idLiv:number): Observable<any>{
          const imageFormData = new FormData();
          imageFormData.append('image', file, filename);
          const url = `${this.apiURL + '/image/uplaodImageLiv'}/${idLiv}`;
          return this.http.post(url, imageFormData);
          }

          supprimerImage(id : number) {
            const url = `${this.apiURL}/image/delete/${id}`;
            return this.http.delete(url, httpOptions);
            }



            /*uploadImageFS(file: File, filename: string, idLiv : number): Observable<any>{
              const imageFormData = new FormData();
              imageFormData.append('image', file, filename);
              const url = `${this.apiURL + '/image/uploadFS'}/${idLiv}`;
              return this.http.post(url, imageFormData);
              }*/
                 
        
                          
}