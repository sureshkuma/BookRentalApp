import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  constructor(private route: Router, private atroute: ActivatedRoute) { }

  ngOnInit() {
  }

  Genredetail() {
    // this.route.navigateByUrl('detail', {relativeTo: this.atroute});
    this.route.navigate(['detail'], {relativeTo: this.atroute});
    console.log('details button clicked');
  }
  EditGenre() {
    this.route.navigate(['edit'], {relativeTo: this.atroute});
    console.log('Edit button is clicked');
  }

  DeleteGenre() {
    confirm('the item is deleted from list');
  }

}
