import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import "@angular/compiler";
import { ReactiveFormsModule } from '@angular/forms';
import { AddrestaurantsComponent } from './addrestaurants/addrestaurants.component';
import { UpdaterestaurantsComponent } from './updaterestaurants/updaterestaurants.component';

@NgModule({
    declarations: [
     AddrestaurantsComponent,
     UpdaterestaurantsComponent
    ],
    imports: [
      CommonModule, RouterModule, ReactiveFormsModule
    ],
    providers :[]
  })
  export class RestaurantsModule { }