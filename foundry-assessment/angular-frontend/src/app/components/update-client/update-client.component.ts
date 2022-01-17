import { Component, OnInit, Injectable } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { IClient } from 'src/app/client';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class UpdateClientComponent implements OnInit {

  clients: IClient[] = [];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
  }


  editClient(client: IClient){
    this.clientService.editClient(client).subscribe((client) => this.clients.push(client)),
    err => console.log('HTTP Error', err);

 
}
}
