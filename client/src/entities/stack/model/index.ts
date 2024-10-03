export type Stack = {
  title: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
};

export type AuthResponse = {
  accessToken: string;
  stack: Stack;
};
