import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { UserLogin } from 'src/app/interfaces/user-login';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{

  constructor(private serviceUser : UserService){}  
  formLogin !: FormGroup;


  ngOnInit(): void {
    
    this.formLogin = new FormGroup({
      'email' :new FormControl('', {
        validators : [Validators.required, Validators.email, Validators.pattern("^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
        updateOn : 'blur'
      }),
      'password' : new FormControl('', {
        validators : [Validators.required, Validators.minLength(8)],
        updateOn : 'blur'
      })
    })
  }

  login(){
    if(!this.formLogin.invalid){
      let userLogin : UserLogin ={
        email : this.formLogin.controls['email'].value,
        password : this.formLogin.controls['password'].value
      }
      this.serviceUser.postLogin(userLogin).pipe(
        map((data : any)=> data.token)
      ).subscribe((token)=>{
        console.log(token);
        
      },
      (error)=>{
        console.log("Error del servidor", error);
        
    });

          
      
    }


  }

}
