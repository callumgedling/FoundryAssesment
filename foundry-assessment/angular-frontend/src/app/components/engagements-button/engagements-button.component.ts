import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import  { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-engagements-button',
  templateUrl: './engagements-button.component.html',
  styleUrls: ['./engagements-button.component.css']
})
export class EngagementsButtonComponent implements OnInit {

  colour: string = "steelblue";


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  
  goToEngagements(){
    this.router.navigateByUrl(`/engagements`)
  }

}






