import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DirectorComponent } from './director/director.component';
import { MoviesComponent } from './movies/movies.component';
//import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'director',component:DirectorComponent},
  {path: 'movies', component:MoviesComponent}
  //{path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
