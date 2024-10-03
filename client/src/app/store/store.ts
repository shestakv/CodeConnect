//? способ создания хранилища в Redux, который автоматически включает ряд полезных настроек
import { userReducer } from '@/entities/user';
import { configureStore } from '@reduxjs/toolkit';

//? редуктор пользователя из файла userSlice.ts. Редуктор отвечает за управление состоянием пользователя в приложении.
// import { userReducer } from '@/entities/user';
import { companyReducer } from '@/entities/company';

const store = configureStore({
    reducer: {
      user: userReducer,
      company: companyReducer //? В этом объекте ключ reducer используется для определения всех редукторов, которые будут работать с хранилищем.
    },
  });

//? Тип RootState, который использует TypeScript для получения типа возвращаемого значения функции store.getState. Это позволяет TypeScript узнать, каким будет общее состояние хранилища
export type RootState = ReturnType<typeof store.getState>

//? Тип AppDispatch, который является типом функции dispatch, используемой в хранилище. Это также помогает TypeScript с типизацией действий, которые могут быть диспетчеризованы в хранилище.
export type AppDispatch = typeof store.dispatch

//? Экспорт store по умолчанию, что позволяет другим файлам импортировать хранилище и использовать его для управления состоянием приложения.
export default store;
  
