export type UserStack = {
  id: number;
  userId: number;
  stackId: number;
  grade: number;
  Stack: {
    id: number;
    title: string;
    image: string;
    TestingResults: TestingResult[];
    StackTasks: StackTask[];
  };
};

type TestingResult = {
  id: number;
  userId: number;
  quantityCorrect: number;
  quantityTrue: number;
  quantityFalse: number;
  currentStackTaskId: number;
};

type StackTask = {
  id: number;
  stackId: number;
  description: string;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
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
