import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestaurantsService } from '../../services/restaurants.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrl: './restaurants.component.css'
})
export class RestaurantsComponent implements OnInit {

  public restaurantsList:any[] = [];

  constructor(private fb:FormBuilder, private restaurantService:RestaurantsService,
     private router:Router ) {}

  ngOnInit(): void {
    this.restaurantService.getAll().subscribe((data)=> {
      if(data.length !=0){
        this.restaurantsList = data;  
        console.log(this.restaurantsList)
      }
  })

}

}
