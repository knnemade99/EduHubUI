import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import axios from 'axios';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

console.log('`AjaxCall` bundle loaded asynchronously');

@NgModule({
})
export class AjaxCallModule {
  constructor(){
  }
  ajaxCall(ajaxConfig){
    let type = ajaxConfig.type ? ajaxConfig.type : 'GET';
    let payload = ajaxConfig.payload ? ajaxConfig.payload : {};
    let url = 'http://localhost:8000/auth/login';
    let defaultConfig = {
      timeout: 5000,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };
      if(ajaxConfig.headers){
        Object.assign(defaultConfig.headers,ajaxConfig.headers);
      }

    switch(type){
      case 'GET':
      break;

      case 'POST':
        return axios.post(url , payload , defaultConfig)
        .then(function (response) {
               return response.data;
              })
        .catch(function (error) {
          let errorObj = {
            status : error.response.status,
            message : error.response.data.message
          }
          return errorObj;
        });

      case 'PUT':
      break;

      case 'DELETE':
      break;

      case 'UPDATE':
      break;

      default:
      break;
    }
  }
}
