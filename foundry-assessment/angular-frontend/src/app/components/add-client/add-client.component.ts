import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';
import {IClient} from '../../client';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  @Output() onAddClient: EventEmitter<IClient> = new EventEmitter()
  id: string;
  name: string;
  subscription: Subscription;
  showAddClient: boolean;
  


  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value => this.showAddClient = value));
   }

  ngOnInit(): void {
  }

  //When the submit button is pressed check to see if the name field is empty, if not post information to backend
  onSubmit(){
    if (!this.name){
      alert("Please add a name")
      return;
    }

    const newClient = {
      id: this.id,
      name: this.name
    };

    this.onAddClient.emit(newClient);

    this.id = '';
    this.name = '';
  }

}
