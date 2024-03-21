import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../Services/UserService/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent implements OnInit{
  ForgotForms!:FormGroup;
  submitted =false;
  constructor(private formBuilder:FormBuilder,private userService:UserService){}
  ngOnInit(): void {
    this.ForgotForms = this.formBuilder.group(
      {
        Email:['',[Validators.required,Validators.email]],
      }
    )
    }

    ForgetOnSubmit(){
      this.submitted = true;
      let regData ={
        Email:this.ForgotForms.value.Email
      }
      this.userService.forgotPassword(regData).subscribe((res:any)=>{
        console.log(res);
      })
    }

}
