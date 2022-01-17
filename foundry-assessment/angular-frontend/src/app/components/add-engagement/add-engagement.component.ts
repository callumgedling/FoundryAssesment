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

    this.id = '';
    this.name = '';
  }

}



