import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  constructor(private router:Router){
    
  }
  navigateToDashboard(){
    this.router.navigateByUrl("dashboard");
  }
}
