import { createReducer, on } from '@ngrx/store';
import * as fromActions from './user-actions';
import { UserResponse } from './user-models';

export interface UserState {
  entity: UserResponse | null;
  id: string | null;
  loading: boolean | null;
  error: string | null;
}

const initialState: UserState = {
  entity: null,
  id: null,
  loading: null,
  error: null
};

export const reducer = createReducer(

  initialState,

  // init
  on(fromActions.init, (state) => ({
    ...state,
    loading: true
  })),

  on(fromActions.initAuthorized, (state, action) => ({
    ...state,
    loading: false,
    entity: action.user,
    id: action.email,
    error: null
  })),

  on(fromActions.initUnauthorized, (state) => ({
    ...state,
    loading: false,
    entity: null,
    id: null,
    error: null
  })),

  on(fromActions.initError, (state, action) => ({
    ...state,
    loading: false,
    entity: null,
    id: null,
    error: action.error
  })),

  // login
  on(fromActions.signInEmail, (state) => ({
    ...state,
    loading: true,
    entity: null,
    id: null,
    error: null
  })),

  on(fromActions.signInEmailSuccess, (state, action) => ({
    ...state,
    loading: false,
    entity: action.user,
    id: action.email,
    error: null
  })),

  on(fromActions.signInEmailError, (state, action) => ({
    ...state,
    loading: false,
    entity: null,
    id: null,
    error: action.error
  })),

  // Registro
  on(fromActions.signUpEmail, (state) => ({
    ...state,
    loading: true,
    entity: null,
    id: null,
    error: null
  })),

  on(fromActions.signUpEmailSuccess, (state, action) => ({
    ...state,
    loading: false,
    entity: action.user,
    id: action.email,
    error: null
  })),

  on(fromActions.signUpEmailError, (state, action) => ({
    ...state,
    loading: false,
    entity: null,
    id: null,
    error: action.error
  })),

  // Logout
  on(fromActions.signOutEmail, () => ({
    ...initialState
  })),

  on(fromActions.signOutEmailSuccess, () => ({
    ...initialState
  })),

  on(fromActions.signOutEmailError, (state, action) => ({
    ...state,
    loading: false,
    entity: null,
    id: null,
    error: action.error
  }))

);
