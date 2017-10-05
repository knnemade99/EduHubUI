import {
  Component,
  OnInit,
} from '@angular/core';
import * as $ from 'jquery';
/**
* We're loading this component asynchronously
* We are using some magic with es6-promise-loader that will wrap the module with a Promise
* see https://github.com/gdi2290/es6-promise-loader for more info
*/

console.log('`Login` component loaded asynchronously');

@Component({
  selector: 'login',
  styleUrls: [ './login.component.css' ],
  template: `
    <div class="body-wrapper">
      <div class="jumbotron">
          <div id="logindiv" class="login transform-element">
            <div>
              <a (click)="this.onLoginExit($event)"><sup><span class="fa fa-arrow-left back_to_home"></span></sup></a>
              <h2 class="inline_block">Login</h2>
              <form role="form">
                <div class="form-group row">
                  <div class="input-group col-sm-5 col-xs-5 col-md-5">
                    <input type="text" class="form-control" id="uLogin" placeholder="Login">
                    <label for="uLogin" class="input-group-addon glyphicon glyphicon-user"></label>
                  </div>
                  <div class="col-sm-7 col-xs-7 col-md-7">
                  </div>
                </div> <!-- /.form-group -->

                <div class="form-group row">
                  <div class="input-group  col-sm-5 col-xs-5 col-md-5">
                    <input type="password" class="form-control" id="uPassword" placeholder="Password">
                    <label for="uPassword" class="input-group-addon glyphicon glyphicon-lock"></label>
                  </div> <!-- /.input-group -->
                  <div class="col-sm-7 col-xs-7 col-md-7">
                  </div>
                </div> <!-- /.form-group -->

                <div class="checkbox">
                  <label>
                    <input type="checkbox"> Remember me
                  </label>
                </div> <!-- /.checkbox -->
              </form>
            </div>
          </div>
      </div>
    </div>

  `,
})
export class LoginComponent implements OnInit {
    constructor(){
      this.onLoginExit = this.onLoginExit.bind(this);
    }

    public ngOnInit() {
      console.log('hello `Signup` component');
    }
    onLoginExit(e){
      $("#logindiv").removeClass('login');
      $("#logindiv").addClass('login_exit');
      setTimeout(function()
      {
        window.location = '#home';
      }, 1000);
    }
}
