import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  loginForm!: FormGroup;
  newData:any;

  
  constructor(private fb: FormBuilder, private router: Router, private auth : AuthService){}
  ngOnInit(): void{
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  onSubmit(){
    if(this.loginForm.valid){
      this.auth.getUsers(this.loginForm.value).subscribe(
        (data: any) => {
          this.newData = data
          setTimeout(() => {
            console.log(this.newData[0].Msg);
            if (this.newData[0].Msg == "SUCCESS"){
              this.router.navigate(['/home']);
            }else{
              this.loginForm.reset();
              alert("Wrong Username/Password");
            }
          }, 1000);
        },
        (err : any) => {
        this.loginForm.reset();
        alert("Wrong Username/Password");
        }
      );

    }else{
      this.validateAllFormFields(this.loginForm);
    }
  }

  private validateAllFormFields(formGroup : FormGroup){
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if(control instanceof FormControl){
        control.markAsDirty({onlySelf:true})
      }else if( control instanceof FormGroup){
        this.validateAllFormFields(control)
      }
    })
  }
}
