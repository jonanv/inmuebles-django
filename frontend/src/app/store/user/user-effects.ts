import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

// Imports
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import * as fromActions from './user-actions';

import { UserResponse } from './user-models';

// Services
import { Notification } from '../../services';

import { environment } from '../../../environments/environment';

@Injectable()
export class UserEffects {

  constructor(
    private httpClient: HttpClient,
    private actions: Actions,
    private notificationService: Notification,
    private router: Router
  ) {}

  public signUpEmail = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.signUpEmail),
      map((action) => action.user),
      switchMap((userData) =>
        this.httpClient.post<UserResponse>(
          `${ environment.url }account/register/`,
          userData
        ).pipe(

          tap((response: UserResponse) => {
            localStorage.setItem(
              'token',
              response.token.access
            );
            this.router.navigate(['/']);
          }),

          map((response: UserResponse) =>
            fromActions.signUpEmailSuccess({
              email: response.email,
              user: response || null
            })
          ),

          catchError(error => {
            this.notificationService.error(
              'Errores al registrar nuevo usuario'
            );

            return of(
              fromActions.signUpEmailError({
                error: error.message
              })
            );
          })
        )
      )
    )
  );

  public signInEmail = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.signInEmail),
      map((action) => action.credentials),
      switchMap((userData) =>
        this.httpClient.post<UserResponse>(
          `${ environment.url }account/login-app/`,
          userData
        ).pipe(
          tap((response: UserResponse) => {
            localStorage.setItem(
              'token',
              response.token.access
            );
            this.router.navigate(['/']);
          }),

          map((response: UserResponse) =>
            fromActions.signInEmailSuccess({
              email: response.email,
              user: response || null
            })
          ),

          catchError(error => {
            this.notificationService.error(
              'Las credenciales son incorrectas'
            );

            return of(
              fromActions.signInEmailError({
                error: error.message
              })
            );
          })
        )
      )
    )
  );

  public init = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.init),
      switchMap(async () =>
        localStorage.getItem('token')
      ),
      switchMap((token) => {
        if (token) {
          return this.httpClient.get<UserResponse>(
            `${ environment.url }account/login/`
          ).pipe(
            tap((response: UserResponse) => {
              console.log(
                'Data del usurio que viene del servidor',
                response
              );
            }),

            map((response: UserResponse) =>
              fromActions.initAuthorized({
                email: response.email,
                user: response || null
              })
            ),

            catchError(error => {
              return of(
                fromActions.initError({
                  error: error.message
                })
              );
            })
          );
        } else {
          return of(
            fromActions.initUnauthorized()
          );
        }
      })
    )
  );

}
