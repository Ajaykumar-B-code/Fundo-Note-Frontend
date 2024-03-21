import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../Services/UserService/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{
  hidden=true;
  fnamecheck!: FormGroup;
  submitted = false;
  constructor(private formBuilder:FormBuilder, private userService:UserService){}
  ngOnInit(): void {
      this.fnamecheck=this.formBuilder.group(
        {
          Fname:['',[Validators.required,Validators.maxLength(5)]],
          Lname:['',[Validators.required]],
          Email:['',[Validators.required,Validators.email]],
          Password:['',[Validators.required,Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}")]]
        }
      )
  }

  registerOnSubmit(){
    this.submitted=true;
    let regDate ={
      Fname:this.fnamecheck.value.Fname,
      Lname:this.fnamecheck.value.Lname,
      Email:this.fnamecheck.value.Email,
      Password:this.fnamecheck.value.Password
    }
    this.userService.register(regDate).subscribe((res:any)=>{
      console.log(res);
    })
  }

}
