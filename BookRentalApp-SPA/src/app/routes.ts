import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RentalstatusComponent } from './rentalstatus/rentalstatus.component';
import { GenreComponent } from './genre/genre.component';
import { GenreCreateComponent } from './genre/genre-create/genre-create.component';
import { GenerDetailComponent } from './genre/gener-detail/gener-detail.component';
import { GenreEditComponent } from './genre/genre-edit/genre-edit.component';
import { BooksComponent } from './books/books.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { BookEditComponent } from './books/book-edit/book-edit.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { AdminCreateRentalComponent } from './bookdetail/admin-create-rental/admin-create-rental.component';



export const approutes: Routes = [
 {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'rentalstatus', component: RentalstatusComponent},
  {path: 'genre', component: GenreComponent, children: [
    {path: 'create', component: GenreCreateComponent},
    {path: 'detail', component: GenerDetailComponent },
    {path: 'edit', component: GenreEditComponent}
  ]},
  {path: 'book', component: BooksComponent, children: [
    {path: 'detail', component: BookDetailComponent},
    {path: 'edit', component: BookEditComponent}
  ]},
  {path: 'book/create', component: BookCreateComponent},
  {path: 'bookdetail/:id', component: BookdetailComponent},
  {path: 'createrental', component: AdminCreateRentalComponent}
];
