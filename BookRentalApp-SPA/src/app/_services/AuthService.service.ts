import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
baseUrl = 'http://localhost:5000/api/auth/';
jwthelper = new JwtHelperService();
decodetoken: any;
constructor(private http: HttpClient, private route: Router) { }

Login(model: any) {

  return this.http.post(this.baseUrl + 'login', model).pipe(
    map((response: any) => {
      const user = response;
      if (user) {
        localStorage.setItem('token', user.token);
        this.decodetoken = this.jwthelper.decodeToken(user.token);
        this.route.navigate(['/home']);
      }
    })
  );
}

Loggedin() {
const token = localStorage.getItem('token');
return !this.jwthelper.isTokenExpired(token);
}
}
