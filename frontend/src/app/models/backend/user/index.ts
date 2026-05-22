export interface User {
  email: string;
  usermane: string;
  token: Token;
  first_name: string;
  last_name: string;
  phone_number: string;
}

interface Token {
    access: string;
    refresh: string;
}
