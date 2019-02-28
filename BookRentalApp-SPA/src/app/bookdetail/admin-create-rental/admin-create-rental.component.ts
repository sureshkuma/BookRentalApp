import { Component, OnInit } from '@angular/core';
import { Food } from '../../Models/Food';
import { Observable, of } from '../../../../node_modules/rxjs';
import { FormControl } from '../../../../node_modules/@angular/forms';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-admin-create-rental',
  templateUrl: './admin-create-rental.component.html',
  styleUrls: ['./admin-create-rental.component.css']
})
export class AdminCreateRentalComponent implements OnInit {
  selectedValue: string;
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  // dummy code
  constructor() {
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  // tslint:disable-next-line:member-ordering
  foods: Food[] = [
    {value: 'OneMonth-0', viewValue: 'OneMonth'},
    {value: 'SixMonth-1', viewValue: 'SixMonth'}
  ];

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  CheckAvailbility() {
    console.log('checking the availbility');
  }
}
