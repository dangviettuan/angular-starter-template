import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Apollo } from 'apollo-angular/Apollo';
import gql from 'graphql-tag';
const submitRepository = gql`
  mutation {
    login(email: "dangviettuan1508@gmail.com", password: "123456") {
    token
    user {
      id
      name
      email
    }
  }
  }
`;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;

  loginForm: FormGroup;

  constructor(private apollo: Apollo) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    this.apollo.mutate({
      mutation: submitRepository
    }).subscribe(res=>console.log(res));
  }

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
