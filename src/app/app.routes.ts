import { Routes } from '@angular/router';
import { LoginformComponent } from './pages/loginform/loginform.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { EmpprojectmapComponent } from './pages/empprojectmap/empprojectmap.component';
import { ProjectComponent } from './pages/project/project.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
{
    path:'login',
    component:LoginformComponent
},
{
    path:'registration',
    component:RegistrationComponent
},
{
    path:'employee',
    component:EmployeeComponent
},
{
    path:'dashboard',
    component:DashboardComponent
},
{
    path:'empprojectmap',
    component:EmpprojectmapComponent
},
{
    path:'project',
    component:ProjectComponent
}

];
