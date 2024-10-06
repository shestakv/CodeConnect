export type UserStack = {
  id: number;
  userId: number;
  stackId: number;
  grade: number;
  Stack: {
    id: number;
    title: string;
    image: string;
  }
};

export type UserStackList = {
  userStacks: UserStack[];
};

export type UserStackId = UserStack["id"];

export type UserStackResponse = {
  userStack: UserStack;
  userStacks: UserStack[]; 
  message: string;
};

export type UserStackWithoutId = Omit<UserStack, "id">;
