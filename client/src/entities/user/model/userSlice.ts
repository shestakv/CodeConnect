import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from ".";
import {
  refreshAccessToken,
  signUp,
  logout,
  signIn,
  updateUserOnServer,
  getAllUsers,
  getUserById,
  updateAvatarUserOnServer,
} from "./userThunks";
import { message } from "antd";
import { fetchUser } from './fetchUser';

//FIX Что такое слайс?
//? Слайс в Redux Toolkit — это объект, который объединяет состояние, редукторы и действия, относящиеся к одной функциональной области приложения (например, юзеры).

//? Определение типа состояния юзера:
type UserState = {
  user: User | null;
  users: User[];
  userPersonal: User | null;
  loading: boolean;
  error: string | null;
  points: number;
  updatedUser: User | null;
  answeredQuestions: number[]; // массив ID отвеченных вопросов
};

//? Инициализация начального состояния юзера:
const initialState: UserState = {
  user: null,
  users: [],
  userPersonal: null,
  loading: false,
  error: null,
  points: 0,
  answeredQuestions: [],
};

const userSlice = createSlice({
  name: "user", //? Строка, определяющая имя слайса
  initialState, //? Начальное состояние для данной части состояния Redux
  reducers: {
    updatePoints: (state, action: PayloadAction<number>) => {
      state.points += action.payload;
    },
    addAnsweredQuestion: (state, action: PayloadAction<number>) => {
      state.answeredQuestions.push(action.payload);
    },
    updateUser: (state, action: PayloadAction<User>) => {
      state.user = { ...state.user, ...action.payload };
    },
  }, //?  reducers - объект, содержащий ТОЛЬКО синхронные функции-редукторы для обновления состояния

  //? extraReducers -  Объект или функция, используемая для обработки асинхронных действий

  //? builder: это параметр функции extraReducers. Он используется для настройки реакций на асинхронные действия. Builder позволяет добавить обработчики для различных состояний асинхронного действия.

  //? addCase: метод builder'а, который добавляет обработчик для конкретного действия. Он принимает два аргумента:
  //?   1. Тип действия (например, `fetchUser.fulfilled`).
  //?   2. Функцию редуктора, которая обновляет состояние на основе действия.

  //* fulfilled: состояние успешно завершенного асинхронного действия. Обрабатывает успешное выполнение санки, обновляя состояние на основании полученных данных.
  //! rejected: состояние неудачно завершенного асинхронного действия. Обрабатывает ошибку, возникшую при выполнении санки, обновляя состояние на основании ошибки.
  //? pending: состояние текущего асинхронного действия. Используется для сохранения статуса загрузки данных

  extraReducers: (builder) => {
    builder
      //!----------------------refreshAccessToken------------------------
      .addCase(refreshAccessToken.pending, (state) => {
        state.loading = true;
      })
      .addCase(refreshAccessToken.fulfilled, (state, action) => {
        state.loading = false;
        console.log("action.payload.user", action.payload.user);
        
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(refreshAccessToken.rejected, (state) => {
        state.loading = false;
      })
      //!----------------------------signIn------------------------------
      .addCase(signIn.pending, (state) => {
        state.loading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to sign in";
        message.warning(action.payload?.message || "Failed to sign in");
      })

      //!----------------------------signUp------------------------------
      .addCase(signUp.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to sign up";
        message.error(action.payload?.message || "Failed to sign up");
      })

      //!---------------------------logout------------------------------
      .addCase(logout.pending, (state) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to logout";
        message.error(action.payload?.message || "Failed to logout");
      })

      //!--------------------------updateUser----------------------------
      .addCase(updateUserOnServer.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUserOnServer.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(updateUserOnServer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to update user";
        message.error(action.payload?.message || "Failed to update user");
      })
      //!--------------------------updateAvatarUser----------------------------
      .addCase(updateAvatarUserOnServer.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateAvatarUserOnServer.fulfilled, (state, action) => {
        state.loading = false;
        if (state.userPersonal?.id === action.payload.user?.id) {
          state.userPersonal = action.payload.user;
        }
        console.log(action.payload,11111111111);
        
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(updateAvatarUserOnServer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to update user";
        message.error(action.payload?.message || "Failed to update user");
      })

      //!--------------------------getAllUsers----------------------------
      .addCase(getAllUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.users;
        state.error = null;
      })
      .addCase(getAllUsers.rejected, (state) => {
        state.loading = false;
      })
      //!--------------------------getUserById----------------------------
      .addCase(getUserById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.userPersonal = action.payload.user;
        state.error = null;
      })
      .addCase(getUserById.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default userSlice.reducer;
