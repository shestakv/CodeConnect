
export type User = {
  id: number;
  firstname: string;
  surname: string;
  patronymic: string;
  phone: string;
  email: string;
  avatar: string;
  age: number;
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

export type UsersResponse = {
  users: User[];
  message: string;
};

export type UserResponse = {
  user: User;
  message: string;
};

export type FormDataType = {
  workExperience: string | undefined;
  education: string | undefined;
  bio: string | undefined;
  phone: string | undefined;
  location: string | undefined;
  avatar: string | undefined;
};

export type FormDataTypeWithoutAvatar = Omit<FormDataType, "avatar">;

export enum FIELDS {
  WORK_EXPERIENCE = "workExperience",
  EDUCATION = "education",
  BIO = "bio",
  PHONE = "phone",
  LOCATION = "location",
}

export const FIELDS_MAP: Array<keyof FormDataType> = [
  FIELDS.WORK_EXPERIENCE,
  FIELDS.EDUCATION,
  FIELDS.BIO,
  FIELDS.PHONE,
  FIELDS.LOCATION,
];

export const RUSSIAN_FIELDS: Record<FIELDS, string> = {
  [FIELDS.WORK_EXPERIENCE]: "Опыт работы",
  [FIELDS.EDUCATION]: "Образование",
  [FIELDS.BIO]: "О себе",
  [FIELDS.PHONE]: "Номер телефона",
  [FIELDS.LOCATION]: "Локация",
};
