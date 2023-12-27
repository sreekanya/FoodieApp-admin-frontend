import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import "@angular/compiler";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { CustomersComponent } from './components/customers/customers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RestaurantsModule } from './components/restaurants/restaurants.module';
import { RecipesModule } from './components/recipes/recipes/recipes.module';
import { AuthModule } from './components/auth/auth.module';
import {  HttpClient, HttpClientModule } from '@angular/common/http';
import { OrdersComponent } from './components/orders/orders.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RestaurantsComponent,
    RecipesComponent,
    CustomersComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RestaurantsModule,
    RecipesModule,
    AuthModule
   // NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
