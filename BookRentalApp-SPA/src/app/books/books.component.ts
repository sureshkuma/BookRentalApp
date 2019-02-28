import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  constructor(private route: Router, private atroute: ActivatedRoute) { }
 ngOnInit() {
  }

  BookDetail() {
    this.route.navigate(['detail'], {relativeTo: this.atroute});
    console.log('Book Detail is clicked');
  }

  BookEdit() {
 this.route.navigate(['edit'], {relativeTo: this.atroute});
    console.log('Book Edit is clicked');
  }

  DeleteBook() {
    confirm('the book is deleted from list');
  }

}
