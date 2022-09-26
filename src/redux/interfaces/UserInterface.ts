export interface LoginUser {
  email: string;
  password: string;
}

export interface UserData {
  name: string;
  surname: string;
  email: string;
}
export interface UserState extends UserData {
  logged: boolean;
}

export interface RegisterInformation extends UserData {
  email: string;
  password: string;
}

export interface ApiLoginResponse {
  data: { token: string };
}

export type Token = string | null;
