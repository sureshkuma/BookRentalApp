import { Component, OnInit } from '@angular/core';
import { Food } from '../../app/Models/Food';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit {

  selectedValue: string;
  public heroImageUrl = require('../../../src/app/Images/image-1.png');
  constructor(private route: Router) { }

  ngOnInit() {
  }

  CreateRental() {
    this.route.navigate(['/createrental']);
    console.log('admin is created the rental successfully');
  }

  // tslint:disable-next-line:member-ordering
  foods: Food[] = [
    {value: 'OneMonth-0', viewValue: 'OneMonth'},
    {value: 'SixMonth-1', viewValue: 'SixMonth'}
  ];

}
