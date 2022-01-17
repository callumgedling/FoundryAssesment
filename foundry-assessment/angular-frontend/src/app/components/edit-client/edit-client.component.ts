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
  // client: IClient;
  clients: IClient[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']

  }

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
    console.log(this.name)
    this.name = '';
    
  
  }


}
