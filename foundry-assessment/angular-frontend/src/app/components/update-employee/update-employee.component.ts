import { Component, OnInit, Injectable } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { IEmployee } from 'src/app/employee';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employees: IEmployee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }


  editEmployee(employee: IEmployee){
    this.employeeService.editEmployee(employee).subscribe((employee) => this.employees.push(employee)),
    err => console.log('HTTP Error', err);

 
}

}
