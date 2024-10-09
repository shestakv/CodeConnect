//? способ создания хранилища в Redux, который автоматически включает ряд полезных настроек
import { userReducer } from "@/entities/user";
import { companyReducer } from "@/entities/company";
import { userStackReducer } from "@/entities/userStack";
import { configureStore } from "@reduxjs/toolkit";
import { favooriteCompanyReducer } from '@/entities/favoriteCompany';
import { stackReducer } from '@/entities/stack';

//? редуктор пользователя из файла userSlice.ts. Редуктор отвечает за управление состоянием пользователя в приложении.

const store = configureStore({
  reducer: {
    user: userReducer,
    company: companyReducer,
    userStacks: userStackReducer,
    favoriteCompanies: favooriteCompanyReducer,
    stack: stackReducer,
  },
});

//? В слайсе юзера оставить только работу с юзером, signIn и signOut Logout refetch updateUser updateAvatarUser

//? Тип RootState, который использует TypeScript для получения типа возвращаемого значения функции store.getState. Это позволяет TypeScript узнать, каким будет общее состояние хранилища
export type RootState = ReturnType<typeof store.getState>;

//? Тип AppDispatch, который является типом функции dispatch, используемой в хранилище. Это также помогает TypeScript с типизацией действий, которые могут быть диспетчеризованы в хранилище.
export type AppDispatch = typeof store.dispatch;

//? Экспорт store по умолчанию, что позволяет другим файлам импортировать хранилище и использовать его для управления состоянием приложения.
export default store;
