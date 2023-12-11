export type CookiesType = {
  accessToken: string;
  refreshToken: string;
};

export type CustomerId = {
  _Id: string;
};

export type VerifyUser = boolean;

export type AccessTokenType = boolean;

export type ExpiresIn = number;

export type ErrorWrapper = object;

export type AuthState = {
  customer: ExpiresIn | CustomerId | CookiesType | null;
  accessToken: AccessTokenType | null;
  status: string | null;
  error: string | ErrorWrapper | null;
};
