export interface UserGetAllDTO {
  userId: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  phoneNumber: string;
  active: boolean;
  roles: string[];
}

export interface UserGetMeDTO {
  login?:        string;
  email?:        string;
  firstName?:    string;
  lastName?:     string;
  phone?:        string;
  gender?:       string;
  address?:      string;
  dob?:          Date;
  userImageUrl?: string;
  roles?:        string[];
}
