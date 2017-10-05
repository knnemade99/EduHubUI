import { SignupComponent } from './signup.component';

export const routes = [
  { path: '', children: [
    { path: '', component: SignupComponent }
  ]},
];
