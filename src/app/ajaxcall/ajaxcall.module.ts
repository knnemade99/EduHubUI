import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import * as axios from 'axios'

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

console.log('`AjaxCall` bundle loaded asynchronously');

@NgModule({
  imports:[Http],
  providers:[axios]
})
export class AjaxCallModule {
  constructor(){
    this.http = Http;
    this.axios = axios;
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
        return this.axios.post(url , payload , defaultConfig)
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
      break;

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
