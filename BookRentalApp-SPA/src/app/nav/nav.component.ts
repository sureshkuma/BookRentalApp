import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';
import { AuthServiceService } from '../_services/AuthService.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public authsrvc: AuthServiceService, private aletify: AlertifyService) { }

  ngOnInit() {
  }


  loggedin() {
   return this.authsrvc.Loggedin();
  }

  logout() {
    localStorage.removeItem('token');
    this.aletify.success('user logout successfully');
  }
}
