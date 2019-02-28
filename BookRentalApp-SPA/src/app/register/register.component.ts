import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Registerform(form: NgForm) {
    console.log(form.value);
  }

}
