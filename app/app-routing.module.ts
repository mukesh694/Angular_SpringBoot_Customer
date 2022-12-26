import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [

  {path:'' ,component: HomeComponent, pathMatch:"full"},
  {path:'customer', component:CustomerComponent , pathMatch:"full"}, 
  {path:'help', component:CustomerComponent , pathMatch:"full"},  
  {path:'about', component:CustomerComponent , pathMatch:"full"},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
