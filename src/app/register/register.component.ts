import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  public user = new User();
  confirmPassword?: string;
  myForm!: FormGroup;
  err!:any;
  loading:boolean=false;
  constructor(private formBuilder: FormBuilder, private authService:AuthService, private router:Router, private toastr: ToastrService) { }
  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    });
  }
  /*onRegister()
  {
  console.log(this.user);
  }*/
  onRegister() {
    this.loading=true;
    this.authService.registerUser(this.user).subscribe({
      next: (res:any) => {
        this.authService.setRegistredUser(this.user);
        //alert("veillez confirmer votre email");
        this.loading=false;
        this.toastr.success('veillez confirmer votre email', 'Confirmation');

        this.router.navigate(["/verifEmail"]);

        //alert("veillez confirmer votre email");
        // this.router.navigate(["/verifEmail",this.user.email]);
      },
   
        error:(err:any)=>{
          if(err.status=400){
          this.err= err.error.message;
          this.loading=false;
          
      }}
    }
    )
    console.log(this.user);
  }

}
