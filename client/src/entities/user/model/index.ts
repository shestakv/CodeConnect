export type User = {
  firstname: string;
  surname: string;
  patronymic: string;
  phone: bigint;
  email: string;
  password: string;
    createdAt: Date;
    updatedAt: Date;
}

export type AuthResponse = {
  accessToken: string;
  user: User;
};