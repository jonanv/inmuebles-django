import { createAction, props } from '@ngrx/store';

import {
  EmailPasswordCredentials,
  UserCreateRequest,
  UserResponse
} from './user-models';

export const init = createAction(
  '[User] Init: Start'
);

export const initAuthorized = createAction(
  '[User] Init Authorized',
  props<{ email: string; user: UserResponse | null }>()
);

export const initUnauthorized = createAction(
  '[User] Init Unauthorized'
);

export const initError = createAction(
  '[User] Init Error',
  props<{ error: string }>()
);

export const signInEmail = createAction(
  '[User] Login: Start',
  props<{ credentials: EmailPasswordCredentials }>()
);

export const signInEmailSuccess = createAction(
  '[User] Login: Success',
  props<{ email: string; user: UserResponse | null }>()
);

export const signInEmailError = createAction(
  '[User] Login: Error',
  props<{ error: string }>()
);

export const signUpEmail = createAction(
  '[User] Sign Up con email: Start',
  props<{ user: UserCreateRequest }>()
);

export const signUpEmailSuccess = createAction(
  '[User] Sign Up con email: Success',
  props<{ email: string; user: UserResponse | null }>()
);

export const signUpEmailError = createAction(
  '[User] Sign Up con email: Error',
  props<{ error: string }>()
);

export const signOutEmail = createAction(
  '[User] Logout: Start'
);

export const signOutEmailSuccess = createAction(
  '[User] Logout: Success'
);

export const signOutEmailError = createAction(
  '[User] Logout: Error',
  props<{ error: string }>()
);
