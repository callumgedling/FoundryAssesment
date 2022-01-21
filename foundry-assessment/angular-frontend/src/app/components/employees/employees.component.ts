import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { IEmployee } from '../../employee';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import  { Router, ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: IEmployee[] = [];
  faTimes = faTimes;
  faEdit = faEdit;
  employee: IEmployee;
  searchTerm: string;
  name: string;
  searchCondition: string;



  constructor(private employeeService: EmployeeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((employees: any[]) => (this.employees = employees));

  }

  addEmployee(employee:IEmployee) {
    this.employeeService.addEmployee(employee).subscribe((employee) => (this.employees.push(employee)));
  }

  deleteEmployee(employee: IEmployee){
    this.employeeService.deleteEmployee(employee).subscribe(() => (this.employees = this.employees.filter(c => c.id !== employee.id)));
  }

  
  goToEdit(employee: IEmployee){
    this.router.navigateByUrl(`/edit/employee/${employee.id}`)
  }

  idSearch(){
    this.searchCondition = "id"
  }

  nameSearch(){
    this.searchCondition = "name"
  }


  Search(){
    if(this.searchCondition === "name"){
      if(this.name != ""){
        console.log(this.name)
        this.employees = this.employees.filter(res=>{
          return res.name.toUpperCase().match(this.name.toUpperCase())
        });
  
      }
  
      else if (this.name == ""){
        this.ngOnInit();
      }
    }
    else if (this.searchCondition === "id"){
      console.log(this.name)
      if(this.name != ""){
        this.employees = this.employees.filter(res=>{
          return res.id.match(this.name)
        });
  
      }
  
      else if (this.name == ""){
        this.ngOnInit();
      }
    }
   
  }

}




