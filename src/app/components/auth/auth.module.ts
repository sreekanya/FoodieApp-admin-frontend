import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ForgetPasswordComponent } from "./forget-password/forget-password.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

@NgModule({
    declarations: [
      LoginComponent,
      ForgetPasswordComponent,
      RegisterComponent,
    ],
    imports: [
      CommonModule,ReactiveFormsModule, FormsModule
    ]
  })
  export class AuthModule { }