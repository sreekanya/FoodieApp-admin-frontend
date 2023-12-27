import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AddrecipesComponent } from '../addrecipes/addrecipes.component';
import { ViewrecipesComponent } from '../viewrecipes/viewrecipes.component';



@NgModule({
  declarations: [
    AddrecipesComponent,
    ViewrecipesComponent
  ],
  imports: [
    CommonModule, RouterModule, ReactiveFormsModule
  ]
})
export class RecipesModule { }
