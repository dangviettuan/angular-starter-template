import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import * as moment from 'moment';
import { environment } from '../../../environments/environment.prod';
import { map, share, catchError } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { GraphQLError } from 'graphql';
import { MatSnackBar } from '@angular/material';

const loginMutation = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        name
        email
      }
    }
  }
`;
@Injectable()
export class AuthService {
  constructor(
    public snackBar: MatSnackBar,
    private apollo: Apollo,
    private router: Router
  ) {}

  login(email: string, password: string) {
    let seq = this.apollo
      .mutate({
        mutation: loginMutation,
        variables: {
          email,
          password
        }
      })
      .pipe(
        map(res => {
          localStorage.setItem(
            'currentUser',
            JSON.stringify(res.data.login.user)
          );
          localStorage.setItem('token', JSON.stringify(res.data.login.token));
          localStorage.setItem(
            'expires_at',
            (new Date().getTime() + 24 * 60 * 60 * 1000).toString()
          );
        }),
        catchError(err => this.handleError(err)),
        share()
      );
    seq.subscribe(res => {
      this.router.navigate(['/page']);
    });

    return seq;
  }

  private handleError(error: GraphQLError) {
    this.snackBar.open(error.message);
    // return an observable with a user-facing error message
    return throwError(error);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('expires_at');
    this.router.navigate(['/auth/login']);
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
