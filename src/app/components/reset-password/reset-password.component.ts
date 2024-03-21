import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../Services/UserService/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent implements OnInit{
  hidden:boolean=true;
  resetform!:FormGroup;
  token:any;
  submitted = false;
  constructor(private formBuilder:FormBuilder, private userService:UserService,private activeRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.resetform=this.formBuilder.group(
      {
        NewPassword:['',[Validators.required]],
        ConfirmPassword:['',[Validators.required]]
      }
    )
    this.token =this.activeRoute.snapshot.paramMap.get('token');
    // console.log(this.token);
  }
  onSubmit(){
    this.submitted=true;
    let regData={
      NewPassword:this.resetform.value.NewPassword,
      ConfirmPassword:this.resetform.value.ConfirmPassword
    }
    console.log(regData);
    this.userService.ResetPassword(regData,this.token).subscribe((res:any)=>{
     console.log(res);
    }
    )
  }

}
