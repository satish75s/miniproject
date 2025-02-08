import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { IUserToken } from '../../models/UserToken';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-loginform',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MatInputModule, MatButtonModule],
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

// Login form submit
onLogin() {
  
  if (this.loginForm.valid) {
    const loginData = this.loginForm.value;
    console.log('Login data:', loginData);
    this.masterService.authenticateUser(this.loginForm.value).subscribe(
      (response: IUserToken) => {
        // Show the message from the response
        alert("accessToken=="+response.accessToken);
        alert("refreshToken=="+response.refreshToken);
    
        // Log the response for debugging
        console.log('User registered successfully:', response);
    
        // Reset form on successful registration
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