import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivresComponent } from './livres/livres.component';
import { AddLivreComponent } from './add-livre/add-livre.component';
import { UpdateLivreComponent } from './update-livre/update-livre.component';
import { RechercheParGenreComponent } from './recherche-par-genre/recherche-par-genre.component';
import { RechercheParTitreComponent } from './recherche-par-titre/recherche-par-titre.component';
import { ListeGenresComponent } from './liste-genres/liste-genres.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LivreGuard } from './livre.guard';
import { RegisterComponent } from './register/register.component';
import { VerifEmailComponent } from './verif-email/verif-email.component';





const routes: Routes = [{path: "livres", component : LivresComponent},
                        {path: "add-livre", component : AddLivreComponent,canActivate:[LivreGuard]},
                        

                        { path: "", redirectTo: "livres", pathMatch: "full" },
                        {path: "updateLivre/:id", component: UpdateLivreComponent},
                        {path: "rechercheParGenre", component : RechercheParGenreComponent},
                        {path: "rechercheParTitre", component : RechercheParTitreComponent},
                        {path: "listeGenres", component : ListeGenresComponent},
                        {path: 'login', component: LoginComponent},
                        {path: 'app-forbidden', component: ForbiddenComponent},
                        {path:'register',component:RegisterComponent},
                        { path: 'verifEmail', component: VerifEmailComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
