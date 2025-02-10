import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-empprojectmap',
  imports: [],
  templateUrl: './empprojectmap.component.html',
  styleUrl: './empprojectmap.component.css'
})
export class EmpprojectmapComponent {
  http=inject(HttpClient);
  masterService=inject(MasterService);
msg:string='';

testAdminRole() {
  debugger;
  this.masterService.validateTheRole().subscribe({
    next: (response) => {
      this.msg=response;
      console.log('Plain text response:', response);  // response will be "testing Admin Role"
    },
    error: (err) => {
      this.msg="not authorized to access";
      console.error('Error:', err);
    }
  });
//alert('Method not implemented.');
}
testUserRole() {
throw new Error('Method not implemented.');
}

}
