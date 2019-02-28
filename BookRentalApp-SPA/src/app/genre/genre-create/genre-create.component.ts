import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-genre-create',
  templateUrl: './genre-create.component.html',
  styleUrls: ['./genre-create.component.css']
})
export class GenreCreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  CreateGenre(form: NgForm) {
    console.log(form.value);
  }
}
