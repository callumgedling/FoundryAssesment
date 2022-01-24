import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import {IClient} from '../../client';
import {ActivatedRoute, Router, Params} from '@angular/router';
import{Observable} from 'rxjs';


@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  @Output() onEditClient: EventEmitter<IClient> = new EventEmitter();
  faedit = faEdit;
  id: string;
  name: string;
  clients: IClient[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']

  }

  //upon editing the client, check to ensure the name field is filled, if so peform PUT on respective client to update name
  onSubmit(){
     if(!this.name){
      alert("Please add a name")
      return;
    }

    const updatedClient = {
      id: this.id,
      name: this.name,
    };


    this.onEditClient.emit(updatedClient);

    alert("Name Updated")
    this.name = '';
    
  
  }


}
