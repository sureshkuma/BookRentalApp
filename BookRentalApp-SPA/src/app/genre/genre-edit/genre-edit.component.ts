import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-genre-edit',
  templateUrl: './genre-edit.component.html',
  styleUrls: ['./genre-edit.component.css']
})
export class GenreEditComponent implements OnInit {

  constructor(private route: Router, private atroute: ActivatedRoute) { }

  ngOnInit() {
  }

  UpdateGenre(form: NgForm) {
    console.log(form.value);
  }

  Cancel() {
this.route.navigate(['genre']);
  }
}
