import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public heroImageUrl = require('../../../src/app/Images/image-1.png');
  public herosimg = require('../../../src/app/Images/image-2.jpg');
  public heroimng = require('../../app/Images/image-3.jpg');
  public herimges = require('../../app/Images/image-5.jpg');
  constructor() { }
  ngOnInit() {
  }

}
