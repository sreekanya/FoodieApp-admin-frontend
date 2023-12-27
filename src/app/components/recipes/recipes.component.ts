import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {

  public recipesList:any[] = [];

  constructor(private fb:FormBuilder, private recipeService:RecipesService,
     private router:Router ) {}

  ngOnInit(): void {
    this.recipeService.getAll().subscribe((data)=> {
      if(data.length !=0){
        this.recipesList = data;  
        console.log(this.recipesList)
      }
  })
}
}
