export type StackUser = {
  id: number;
  userId: number;
  stackId: number;
  grade: number;
};

export type StackUserList = {
  stackUsers: StackUser[];
};

export type StackUserId = StackUser["id"];

export type StackUserResponse = {
  stackUser: StackUser;
  stackUsers: StackUser[]; 
  message: string;
};

export type StackUserWithoutId = Omit<StackUser, "id">;
