import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';
import {IEmployee} from '../../employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  @Output() onAddEmployee: EventEmitter<IEmployee> = new EventEmitter()
  id: string;
  name: string;
  subscription: Subscription;
  


  constructor(private uiService: UiService) {
   
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.id){
      alert("Please add an ID")
      return;
    }
    else if(!this.name){
      alert("Please add a name")
      return;
    }

    const newEmployee = {
      id: this.id,
      name: this.name
    };

    this.onAddEmployee.emit(newEmployee);

    this.id = '';
    this.name = '';
  }

}



  