import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {

  public ordersList:any[]=[];

  constructor(private fb:FormBuilder, private orderService:OrdersService,
    private router:Router ) {}

    ngOnInit(): void {
      this.orderService.getAll().subscribe((data)=> {
        if(data.length !=0){
          this.ordersList = data;  
          console.log(this.ordersList)
        }
    })
  }

}
