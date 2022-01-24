import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import {IClient} from '../../client';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  clients: IClient[] = [];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.getClients().subscribe((clients) => (this.clients = clients));
  }

  toggleAddClient(){
    console.log("add Client Being Pressed")
  }

}
