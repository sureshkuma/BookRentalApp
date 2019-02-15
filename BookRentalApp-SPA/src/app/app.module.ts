import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '../../node_modules/@angular/router';
import { MatInputModule} from '@angular/material';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthServiceService } from './_services/AuthService.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { routes} from '../app/routes';
import { ErrorInterCeptorProvide } from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';


@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      LoginComponent,
      RegisterComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      RouterModule.forRoot(routes)
   ],
   providers: [
      AuthServiceService,
      ErrorInterCeptorProvide,
      AlertifyService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
