import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { IUserToken } from '../../models/UserToken';
import { MasterService } from '../../services/master.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-loginform',
  imports: [RouterLink, CommonModule, ReactiveFormsModule, FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.css'
})
export class LoginformComponent {

  loginForm: FormGroup;
 

//  tokenObj: IUserToken;
  constructor(private fb: FormBuilder) {
    // Initialize login form
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

}
masterService=inject(MasterService);
route=inject(Router);
// Login form submit
onLogin() {
  
  if (this.loginForm.valid) {
    const loginData = this.loginForm.value;
    console.log('Login data:', loginData);
    this.masterService.authenticateUser(this.loginForm.value).subscribe(
      (response: IUserToken) => {
        // Show the message from the response
        alert("login is success");
        alert("accessToken=="+response.accessToken);
        localStorage.setItem("AccessToken",response.accessToken);
        this.route.navigateByUrl("dashboard")
        console.log('User registered successfully:', response);
        this.loginForm.reset();
      },
      (error: any) => {
        console.error('Error during registration:', error);
        alert('Registration failed. Please try again.');
      }
    );
  } else {
    console.log('Login form is invalid');
  }
}
}