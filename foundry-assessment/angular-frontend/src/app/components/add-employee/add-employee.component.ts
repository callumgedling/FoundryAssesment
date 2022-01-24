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
  showAddEmployee: boolean;
  


  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value => this.showAddEmployee = value));
   
   }

  ngOnInit(): void {
  }

  //When the submit button is pressed check to see if the name field is empty, if not post information to backend
  onSubmit(){
    if (!this.name){
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



  