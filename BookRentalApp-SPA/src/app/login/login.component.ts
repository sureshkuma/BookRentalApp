import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../_services/AuthService.service';
import { NgForm } from '../../../node_modules/@angular/forms';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authsrvc: AuthServiceService, private Alrtfyjs: AlertifyService) { }
  ngOnInit() {
  }

  Login(form: NgForm) {
    this.authsrvc.Login(form.value).subscribe(next => {
    this.Alrtfyjs.success('user logged in succesfully');
    }, error => {
   this.Alrtfyjs.error('user failed to login');
    });
}

}
