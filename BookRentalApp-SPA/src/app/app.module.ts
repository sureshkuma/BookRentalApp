import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
// import {NgxGalleryModule} from 'ngx-gallery';
import { FileUploadModule } from 'ng2-file-upload';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { approutes} from './routes';
import { RentalstatusComponent } from './rentalstatus/rentalstatus.component';
import { GenreComponent } from './genre/genre.component';
import { MemberShipsComponent } from './MemberShips/MemberShips.component';
import { CompareDirective } from './directives/compare.directive';
import { EmailDirective } from './directives/email.directive';
import { GenreCreateComponent } from './genre/genre-create/genre-create.component';
import { GenerDetailComponent } from './genre/gener-detail/gener-detail.component';
import { GenreEditComponent } from './genre/genre-edit/genre-edit.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { BookEditComponent } from './books/book-edit/book-edit.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { AdminCreateRentalComponent } from './bookdetail/admin-create-rental/admin-create-rental.component';


@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      RegisterComponent,
      NavComponent,
      HomeComponent,
      RentalstatusComponent,
      GenreComponent,
      BooksComponent,
      MemberShipsComponent,
      CompareDirective,
      EmailDirective,
      GenreCreateComponent,
      GenerDetailComponent,
      GenreEditComponent,
      BookCreateComponent,
      BooksComponent,
      BookDetailComponent,
      BookEditComponent,
      BookdetailComponent,
      AdminCreateRentalComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      RouterModule.forRoot(approutes),
      TypeaheadModule.forRoot(),
      FormsModule,
      MatFormFieldModule,
      ReactiveFormsModule,
      MatInputModule,
      MatButtonModule,
      MatDatepickerModule,
      MatSelectModule,
      MatNativeDateModule,
      MatListModule,
      MatAutocompleteModule,
      FileUploadModule,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
