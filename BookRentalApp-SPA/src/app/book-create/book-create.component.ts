import { Component, OnInit } from '@angular/core';
import { Food } from '../Models/Food';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  selectedValue: string;
  constructor() { }
  hasBaseDropZoneOver = false;
  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  ngOnInit() {
  }

  // tslint:disable-next-line:member-ordering
  foods: Food[] = [
    {value: 'Econamic-0', viewValue: 'Econamic'},
    {value: 'Social-1', viewValue: 'Social'},
    {value: 'LoveStory-2', viewValue: 'LoveStory'}
  ];

}
