import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Apollo } from 'apollo-angular/Apollo';
import gql from 'graphql-tag';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  isLoading = false;

  loginForm: FormGroup;

  constructor(private authService: AuthService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    // this.apollo
    //   .mutate({
    //     mutation: submitRepository
    //   })
    //   .subscribe(res => console.log(res));
  }

  getEmailErrorMessage() {
    return this.loginForm.controls['email'].hasError('required')
      ? 'E-mail is required.'
      : this.loginForm.controls['email'].hasError('email')
        ? 'Not a valid e-mail.'
        : '';
  }

  submitLoging(value) {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.authService.login(value.email, value.password).subscribe(
        (res: any) => {
          this.isLoading = false;
        },
        error => {
          this.isLoading = false;
        }
      );
    }
  }
}
