import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import {IEmployee} from '../../employee';
import {ActivatedRoute, Router, Params} from '@angular/router';
import{Observable} from 'rxjs';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  @Output() onEditEmployee: EventEmitter<IEmployee> = new EventEmitter();
  faedit = faEdit;
  id: string;
  name: string;
  employees: IEmployee[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']

  }

  onSubmit(){
     if(!this.name){
      alert("Please add a name")
      return;
    }

    const updatedEmployee = {
      id: this.id,
      name: this.name,
    };


    this.onEditEmployee.emit(updatedEmployee);

    alert("Name Updated")
    console.log(this.name)
    this.name = '';

  }
}

