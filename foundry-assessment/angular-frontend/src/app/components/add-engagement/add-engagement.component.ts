import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';
import {IEngagement} from '../../engagement';

@Component({
  selector: 'app-add-engagement',
  templateUrl: './add-engagement.component.html',
  styleUrls: ['./add-engagement.component.css']
})
export class AddEngagementComponent implements OnInit {

  @Output() onAddEngagement: EventEmitter<IEngagement> = new EventEmitter()
  id: string;
  name: string;
  client: string;
  employee: string;
  started: Date;
  ended: Date;
  description: string;
  subscription: Subscription;
  showAddEngagement: boolean;
  


  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value => this.showAddEngagement = value));
   
   }

  ngOnInit(): void {
  }

  //When the submit button is pressed check to see if any field is empty, if not post information to backend
  onSubmit(){
    if (!this.name){
      alert("Please add a name")
      return;
    }
    else if (!this.employee){
      alert("Please add an employee ID")
      return;
    }
    else if (!this.client){
      alert("Please add a client ID")
      return;
    }

    const newEngagement = {
      id: this.id,
      name: this.name,
      employee: this.employee,
      client: this.client,
      started: this.started,
      ended: this.ended,
      description: this.description,
    };

    this.onAddEngagement.emit(newEngagement);

    this.name = '';
    this.client = '';
    this.description = '';
    this.employee = '';
    alert("Engagement Added")

  }

}



