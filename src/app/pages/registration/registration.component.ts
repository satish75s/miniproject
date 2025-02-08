
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { IUserToken } from '../../models/UserToken';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-registration',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  registerForm: FormGroup;
  // Initialize registration form
  constructor(private fb: FormBuilder) {
  this.registerForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    roles: ['', Validators.required],
  });
}
masterService=inject(MasterService);
onRegister() {
  if (this.registerForm.valid) {
    const registerData = this.registerForm.value;
    alert("registerData"+registerData);
    
    this.masterService.registerNewUser(this.registerForm.value).subscribe(
      (response: string) => {
        // Show the message from the response
        alert(response || "Registration is successful");
    
        // Log the response for debugging
        console.log('User registered successfully:', response);
    
        // Reset form on successful registration
        this.registerForm.reset();
      },
      (error: any) => {
        console.error('Error during registration:', error);
        alert('Registration failed. Please try again.');
      }
    );
  } else {
    console.log('Form is invalid');
  }
}
}
