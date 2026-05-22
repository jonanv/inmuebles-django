import { Action } from '@ngrx/store';
import { EmailPasswordCredentials, UserCreateRequest, UserResponse } from './user-models';

export enum Types {
  INIT = '[User] Init: Start',
  INIT_AUTHORIZED = '[User] Init Authorized',
  INIT_UNAUTHORIZED = '[User] Init Unauthorized',
  INIT_ERROR = '[User] Init Error',

  SIGIN_IN_EMAIL = '[User] Login: Start',
  SIGIN_IN_EMAIL_SUCCESS = '[User] Login: Success',
  SIGIN_IN_EMAIL_ERROR = '[User] Login: Error',

  SIGIN_UP_EMAIL = '[User] Sign Up con email: Start',
  SIGIN_UP_EMAIL_SUCCESS = '[User] Sign Up con email: Success',
  SIGIN_UP_EMAIL_ERROR = '[User] Sign Up con email: Error',

  SIGIN_OUT_EMAIL = '[User] Logout: Start',
  SIGIN_OUT_EMAIL_SUCCESS = '[User] Logout: Success',
  SIGIN_OUT_EMAIL_ERROR = '[User] Logout: Error',
}
