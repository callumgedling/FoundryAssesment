import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { IClient } from '../../client';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import  { Router, ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})

export class ClientsComponent implements OnInit {

  showAddClient: boolean = false;
  subscription: Subscription;
  clients: IClient[] = [];
  faTimes = faTimes;
  faEdit = faEdit;
  client: IClient;
  searchTerm: string;
  name: string;
  id: string;
  searchCondition: string;


  constructor(private clientService: ClientService, private router: Router, private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value => this.showAddClient = value));
   }
  
  ngOnInit(): void {
    this.clientService.getClients().subscribe((clients: any[]) => (this.clients = clients));

  }

  //add a client to the database
  addClient(client:IClient) {
    this.clientService.addClient(client).subscribe((client) => (this.clients.push(client)));
  }

  //delete a client from the database
  deleteClient(client: IClient){
    this.clientService.deleteClients(client).subscribe(() => (this.clients = this.clients.filter(c => c.id !== client.id)));
  }

  //Go to the edit client page
  goToEdit(client: IClient){
    this.router.navigateByUrl(`/edit/${client.id}`)
  }

  
  //go to the employees page
  goToEmployees(){
    this.router.navigateByUrl(`/`)
  }

  idSearch(){
    this.searchCondition = "id"
  }

  nameSearch(){
    this.searchCondition = "name"
  }

  //Links to add client and uiService to toggle the add client form appearing
  toggleAddClient(){
    this.uiService.toggleAddClient();
  }


  //add the ability to search by client name in the table, upon deleting the string reset the search
  Search(){
    if(this.searchCondition === "name"){
      if(this.name != ""){

        this.clients = this.clients.filter(res=>{
          return res.name.toUpperCase().match(this.name.toUpperCase())
        });
  
      }
  
      else if (this.name == ""){
        this.ngOnInit();
      }
    }
    //if the search by id button is pressed search by client id
    else if (this.searchCondition === "id"){
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
