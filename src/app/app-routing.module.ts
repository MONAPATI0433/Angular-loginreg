import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginformComponent } from './loginform/loginform.component';
import { RegisterComponent } from './register/register.component';




const routes: Routes = [
  // { path: '/header', component: HeaderComponent },
  { path: 'home', component: HomeComponent },
  { path: 'Login', component: LoginformComponent },
  { path: 'register', component: RegisterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
