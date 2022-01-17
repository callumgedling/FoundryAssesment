import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import  { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-employees-button',
  templateUrl: './employees-button.component.html',
  styleUrls: ['./employees-button.component.css']
})
export class EmployeesButtonComponent implements OnInit {

  colour: string = "steelblue";


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  
  goToEmployee(){
    this.router.navigateByUrl(`/employees`)
  }

}



