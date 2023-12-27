import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {

  public usersList:any[]=[];

  constructor(private fb:FormBuilder, private userService:UsersService,
    private router:Router ) {}

    ngOnInit(): void {
      this.userService.getAll().subscribe((data)=> {
        if(data.length !=0){
          this.usersList = data;  
          console.log(this.usersList)
        }
    })
  }


}



