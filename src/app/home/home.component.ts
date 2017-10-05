import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';
import { Title } from './title';
import { XLargeDirective } from './x-large';

@Component({
  /**
   * The selector is what angular internally uses
   * for `document.querySelectorAll(selector)` in our index.html
   * where, in this case, selector is the string 'home'.
   */
  selector: 'home',  // <home></home>
  /**
   * We need to tell Angular's Dependency Injection which providers are in our app.
   */
  providers: [
    Title
  ],
  /**
   * Our list of styles in our component. We may add more to compose many styles together.
   */
  styleUrls: [ './home.component.css' ],
  /**
   * Every Angular template is first compiled by the browser before Angular runs it's compiler.
   */
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    public ngOnInit() {
      console.log('hello `Signup` component');
    }

    onLoginClick(e){
      $("#homediv").removeClass('home');
      $("#homediv").addClass('home_exit');
      setTimeout(function()
      {
        window.location = '#login';
      }, 1000);
    }

    onSignupClick(e){
      $("#homediv").removeClass('home');
      $("#homediv").addClass('home_exit');
      setTimeout(function()
      {
        window.location = '#register';
      }, 1000);
    }
}
