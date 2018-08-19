import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;

  loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {}

  getEmailErrorMessage() {
    return this.loginForm.controls['email'].hasError('required')
      ? 'E-mail is required.'
      : this.loginForm.controls['email'].hasError('email')
        ? 'Not a valid e-mail.'
        : '';
  }

  submitLoging(value) {
    console.log(value);
  }
}
