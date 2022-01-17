import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { IClient } from '../../client';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-delete-client',
  templateUrl: './delete-client.component.html',
  styleUrls: ['./delete-client.component.css']
})
export class DeleteClientComponent implements OnInit {
    
  @Output() onDeleteClient: EventEmitter<IClient> = new EventEmitter();
  client: IClient;
  faTimes = faTimes;

  constructor(private clientService: ClientService) { }


  ngOnInit(): void {
  }

  onDelete(client){
    this.onDeleteClient.emit(client);
  }
  
 

}
