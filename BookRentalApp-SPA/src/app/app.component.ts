import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './_services/AuthService.service';
import { JwtHelperService } from '../../node_modules/@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  jwthelper = new JwtHelperService();
  constructor(private authsrvc: AuthServiceService) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.authsrvc.decodetoken = this.jwthelper.decodeToken(token);
    }

  }
}
