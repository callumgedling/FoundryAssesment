import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import  { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clients-button',
  templateUrl: './clients-button.component.html',
  styleUrls: ['./clients-button.component.css']
})
export class ClientsButtonComponent implements OnInit {
  colour: string = "steelblue";


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  
  goToClient(){
    this.router.navigateByUrl(`/clients`)
  }

}

