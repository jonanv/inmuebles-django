import { User as UserResponse } from '../../models/backend/user/index';

export interface EmailPasswordCredentials {
  email: string;
  password: string;
}

export interface UserRegister extends UserResponse {
  password: string;
  password_confirm: string;
}

// Omite el atributo token del model backend User
export type UserCreateRequest = Omit<UserResponse, 'token'>;
