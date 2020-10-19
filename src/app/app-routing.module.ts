import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ContactComponent } from './contact/contact.component';
import { CurriculumComponent } from './curriculum/curriculum.component';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: '',   redirectTo: 'home', pathMatch: 'full'},
    {path: "curriculum", component: CurriculumComponent},
    {path: "contacto", component: ContactComponent},
    {path: "catalogo", component: CatalogoComponent},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
