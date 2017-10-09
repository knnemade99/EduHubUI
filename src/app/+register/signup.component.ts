import {
  Component,
  OnInit,
} from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
/**
* We're loading this component asynchronously
* We are using some magic with es6-promise-loader that will wrap the module with a Promise
* see https://github.com/gdi2290/es6-promise-loader for more info
*/

console.log('`Signup` component loaded asynchronously');

@Component({
  selector: 'signup',
  styleUrls: [ './signup.component.css' ],
  template: `
    <div class="body-wrapper">
      <div class="jumbotron">
          <div id="signupdiv" class="signup transform-element">
            <div>
              <h2 class="inline_block">Register</h2>
              <a (click)="this.onSignupExit($event)"><sup><span id="back" class="fa fa-arrow-right back_to_home"></span></sup></a>
              <form role="form">
                <div class="form-group row">
                  <div class="col-sm-7 col-xs-7 col-md-7">
                  </div>
                  <div class="input-group col-sm-5 col-xs-5 col-md-5">
                    <input type="text" class="form-control" id="uLogin" placeholder="Login">
                    <label for="uLogin" class="input-group-addon glyphicon glyphicon-user"></label>
                  </div>
                </div> <!-- /.form-group -->

                <div class="form-group row">
                  <div class="col-sm-7 col-xs-7 col-md-7">
                  </div>
                  <div class="input-group  col-sm-5 col-xs-5 col-md-5">
                    <input type="password" class="form-control" id="uPassword" placeholder="Password">
                    <label for="uPassword" class="input-group-addon glyphicon glyphicon-lock"></label>
                  </div> <!-- /.input-group -->
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
export class SignupComponent implements OnInit {

  constructor(private router: Router){
    this.onSignupExit = this.onSignupExit.bind(this);
    this.router = router;
  }

  public ngOnInit() {
    console.log('hello `Signup` component');
  }
  onSignupExit(e){
    $("#signupdiv").removeClass('signup');
    $("#signupdiv").addClass('signup_exit');
    setTimeout(function(me)
    {
      me.router.navigateByUrl('home');
    }, 1200, this);
  }
}
