import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import {IEngagement} from '../../engagement';
import {ActivatedRoute, Router, Params} from '@angular/router';
import{Observable} from 'rxjs';

@Component({
  selector: 'app-edit-engagements',
  templateUrl: './edit-engagements.component.html',
  styleUrls: ['./edit-engagements.component.css']
})
export class EditEngagementsComponent implements OnInit {

  @Output() onEditEngagement: EventEmitter<IEngagement> = new EventEmitter();
  @Output() onEndedEngagement: EventEmitter<IEngagement> = new EventEmitter();
  faedit = faEdit;
  id: string;
  name: string;
  client: string;
  employee: string;
  started: Date;
  ended: Date;
  description: string;
  engagements: IEngagement[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id']
    this.name = this.route.snapshot.params['name']
    this.client = this.route.snapshot.params['client']
    this.employee = this.route.snapshot.params['employee']
    this.started = this.route.snapshot.params['started']
    this.description = this.route.snapshot.params['description']
  }

  onSubmit(){
    if (!this.name){
      alert("Please add a name")
      return;
    }
    const updatedEngagement = {
      id: this.id,
      name: this.name,
      employee: this.employee,
      client: this.client,
      started: this.started,
      ended: this.ended,
      description: this.description,
    };
    this.onEditEngagement.emit(updatedEngagement);
    alert("Engagement Edited")
  }

  engagementEnded(){
    const endedEngagement = {
      id: this.id,
      name: this.name,
      employee: this.employee,
      client: this.client,
      started: this.started,
      ended: new Date(),
      description: this.description,
    };

    this.onEndedEngagement.emit(endedEngagement)
    alert("Engagement End Time Added")
    

  }


}


