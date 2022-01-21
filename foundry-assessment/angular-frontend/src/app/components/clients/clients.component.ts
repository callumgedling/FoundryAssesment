import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { IClient } from '../../client';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import  { Router, ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})

export class ClientsComponent implements OnInit {

  clients: IClient[] = [];
  faTimes = faTimes;
  faEdit = faEdit;
  client: IClient;
  searchTerm: string;
  name: string;
  id: string;
  searchCondition: string;


  constructor(private clientService: ClientService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.clientService.getClients().subscribe((clients: any[]) => (this.clients = clients));

  }

  addClient(client:IClient) {
    this.clientService.addClient(client).subscribe((client) => (this.clients.push(client)));
  }

  deleteClient(client: IClient){
    this.clientService.deleteClients(client).subscribe(() => (this.clients = this.clients.filter(c => c.id !== client.id)));
  }

  goToEdit(client: IClient){
    this.router.navigateByUrl(`/edit/${client.id}`)
  }

  goToEmployees(){
    this.router.navigateByUrl(`/`)
  }

  idSearch(){
    this.searchCondition = "id"
  }

  nameSearch(){
    this.searchCondition = "name"
  }


  Search(){
    if(this.searchCondition === "name"){
      if(this.name != ""){
        console.log(this.name)
        this.clients = this.clients.filter(res=>{
          return res.name.toUpperCase().match(this.name.toUpperCase())
        });
  
      }
  
      else if (this.name == ""){
        this.ngOnInit();
      }
    }
    else if (this.searchCondition === "id"){
      console.log(this.name)
      if(this.name != ""){
        this.clients = this.clients.filter(res=>{
          return res.id.match(this.name)
        });
  
      }
  
      else if (this.name == ""){
        this.ngOnInit();
      }
    }

   
  }

  





  


}
