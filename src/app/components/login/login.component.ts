import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {IResponse} from '../../interfaces/IResponse';
import {LocalStorageService} from 'ngx-webstorage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginData = {
    email: '',
    password: ''
  };
  public errorMessage = '';
  public alert = false;
  public validationErrors: any[] = [];

  constructor(
    private http: HttpClient,
    private ls: LocalStorageService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public login() {

    this.errorMessage = '';
    this.validationErrors = [];

    this.http.post<IResponse>(environment.apiUrl + '/auth/login', this.loginData)
    .subscribe(response => {

      if (response.success) {
        this.alert = false;
        this.ls.store('token', response.token);
        this.router.navigate(['/']);

      } else {

        this.alert = true;
        this.errorMessage = response.message || '';
        this.validationErrors = response.errors || [];

      }
    });

    console.log(this.loginData);

  }

}
