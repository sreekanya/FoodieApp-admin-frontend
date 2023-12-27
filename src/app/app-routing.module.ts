import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './components/auth/forget-password/forget-password.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { CustomersComponent } from './components/customers/customers.component';
import { OrdersComponent } from './components/orders/orders.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { AddrestaurantsComponent } from './components/restaurants/addrestaurants/addrestaurants.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { UpdaterestaurantsComponent } from './components/restaurants/updaterestaurants/updaterestaurants.component';


const routes: Routes = [
  {path:'', redirectTo:'/restaurants', pathMatch:"full"},
  {path:'restaurants', component: RestaurantsComponent},
  { path :'restaurants' , children :[
    {path: '' , component: RestaurantsComponent},
    {path: 'add' , component: AddrestaurantsComponent},
    {path: 'update' , component: UpdaterestaurantsComponent} 
  ]},
  {path:'recipes', component:RecipesComponent},
  {path:'customers', component:CustomersComponent },
  { path :'auth' , children :[
    {path: 'login' , component: LoginComponent},
    {path: 'register' , component: RegisterComponent},
    {path: 'forget-password' , component: ForgetPasswordComponent},
]},
{path:'orders', component: OrdersComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
