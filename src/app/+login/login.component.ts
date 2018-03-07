import {
  Component,
  OnInit,
} from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { AjaxCallModule } from '../ajaxcall/ajaxcall.module'
import { mainReducer } from "../reducers/reducer";
import { StoreModule } from "@ngrx/store";
import { Store } from "@ngrx/store";

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
/**
* We're loading this component asynchronously
* We are using some magic with es6-promise-loader that will wrap the module with a Promise
* see https://github.com/gdi2290/es6-promise-loader for more info
*/

console.log('`Login` component loaded asynchronously');

@Component({
  imports:[
    StoreModule.provideStore({mainReducer})
  ]
  selector: 'login',
  styleUrls: [ './login.component.css' ],
  providers: [AjaxCallModule], // <-----
  template: `
    <div class="body-wrapper">
      <div class="jumbotron">
          <div id="logindiv" class="login transform-element">
            <div>
              <a (click)="this.onLoginExit($event)"><sup><span class="fa fa-arrow-left back_to_home"></span></sup></a>
              <h2 class="inline_block">Login</h2>
              <form role="form">
                <div class="form-group row">
                  <div class="input-group col-sm-3 col-xs-3 col-md-3">
                    <input [(ngModel)]="username" name="username" type="text" class="form-control" placeholder="Login">
                    <label class="input-group-addon glyphicon glyphicon-user"></label>
                  </div>
                  <div class="col-sm-9 col-xs-9 col-md-9">
                  </div>
                </div> <!-- /.form-group -->

                <div class="form-group row">
                  <div class="input-group  col-sm-3 col-xs-3 col-md-3">
                    <input [(ngModel)]="password" name="password" type="password" class="form-control" placeholder="Password">
                    <label class="input-group-addon glyphicon glyphicon-lock"></label>
                  </div> <!-- /.input-group -->
                  <div class="col-sm-9 col-xs-9 col-md-9">
                  </div>
                </div> <!-- /.form-group -->

                <div class="checkbox row">
                  <label>
                    <input type="checkbox"> Remember me
                  </label>
                </div> <!-- /.checkbox -->

                <div class="form-group row">
                  <div class="input-group  col-sm-3 col-xs-3 col-md-3">
                    <button (click)="login($event)" class="btn btn-primary login_button form-control" name="Login">Login</button>
                    <button class="btn btn-primary reset_button form-control" name="Login">Reset</button>
                  </div>
                  <div class="col-sm-9 col-xs-9 col-md-9">
                  </div>
                </div>

              </form>
            </div>
          </div>
      </div>
    </div>

  `,
  inputs: ['usernme','password']
})
export class LoginComponent implements OnInit {
    public username : string;
    public password: string;
    constructor(private router: Router, private http: Http, private ajaxCallModule: AjaxCallModule){
      this.onLoginExit = this.onLoginExit.bind(this);
      this.login = this.login.bind(this);
      // this.addComment = this.addComment.bind(this);
      this.router = router;
      this.http = http;
    }

    public ngOnInit() {
    }

    onLoginExit(e){
      $("#logindiv").removeClass('login');
      $("#logindiv").addClass('login_exit');
      setTimeout(function(me)
      {
        me.router.navigateByUrl('home');
      }, 1200 , this);
    }

    login() {
      let bodyString = {'username': this.username };
      let headers = new Headers({ 'Content-Type': 'application/json', 'Authentication':this.password }); // ... Set content type to JSON
      let options = new RequestOptions({ headers: headers }); // Create a request option
      let ajaxConfig = {
        type : 'POST',
        payload : {"username":this.username},
        headers : {'authentication' : this.password}
      }
      this.ajaxCallModule.ajaxCall(ajaxConfig).then( (response) => {
        if(response.message=='Success'){
debugger;
          this.store.dispatch({ type: AuthToken, payload: { response } });
        }
      });
    }
}
