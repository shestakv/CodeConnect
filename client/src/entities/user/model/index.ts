export type User = {
  id: number;
  firstname: string;
  surname: string;
  patronymic: string;
  phone: bigint;
  email: string;
  avatar: string;
  location: string;
  bio: string;
  workExperience: string;
  education: string;
  cookingExp: number;
  password: string;
  createdAt: Date;
  updatedAt: Date;
};


export type AuthResponse = {
  accessToken: string;
  user: User;
};