import { Component } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(){
    console.log('holaa', localStorage.getItem('jwt'));
    
  }

}
