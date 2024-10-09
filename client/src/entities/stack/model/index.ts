export type Stack = {
  id: number;
  title: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
};

// export type Stacks = {
//   stacks: Stack[];
// };

export type StackId = Stack["id"];

export type StackResponse = {
  stack: Stack;
  message: string;
  stacks: Stack[];
};

export type StackWithoutId = Omit<Stack, "id">;
