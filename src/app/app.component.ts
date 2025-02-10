import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RegistrationComponent } from './pages/registration/registration.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { ProjectComponent } from './pages/project/project.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginformComponent } from './pages/loginform/loginform.component';
import { EmpprojectmapComponent } from './pages/empprojectmap/empprojectmap.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'miniproject';
}
