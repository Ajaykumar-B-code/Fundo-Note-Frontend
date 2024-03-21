import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../Services/UserService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  hidden:boolean=true;
  loginForms!:FormGroup;
  submitted =false;
  constructor(private formBuilder:FormBuilder,private userService:UserService,private route:Router){}
  ngOnInit(): void {
      this.loginForms=this.formBuilder.group(
        {
          Email:['',[Validators.required,Validators.email]],
          Password:['',[Validators.required,Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}")
        ]]
        }
      )
  }

  LoginSubmit(){
    this.submitted = true;
    if(this.loginForms.valid){
    let regData ={
      Email:this.loginForms.value.Email,
      Password:this.loginForms.value.Password
    }
    this.userService.login(regData).subscribe((res:any)=>{
      console.log(res);
      localStorage.setItem("token",res.data);
      this.route.navigateByUrl("dashboard/note")
    })}
    else{
      console.log("Invalid inputs")
    }
  }
  }






