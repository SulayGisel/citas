import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string='ajs';
  password: string ='12';

  constructor() {}

  guardar() {
    console.log(this.email);
    console.log(this.password);
  }
}
