import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { IEmployee } from '../../employee';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  @Output() onDeleteEmployee: EventEmitter<IEmployee> = new EventEmitter();
  employee: IEmployee;
  faTimes = faTimes;

  constructor(private employeeService: EmployeeService) { }


  ngOnInit(): void {
  }

  //Upon presing the "X" icon, delete the respective row of information
  onDelete(employee){
    this.onDeleteEmployee.emit(employee);
  }
  

}



