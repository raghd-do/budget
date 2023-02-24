import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import userReducer from "./user/userSlice";
import productReducer from "./productSlice";
import billReducer from "./billSlice";
import themeReducer from "./themeSlice";
// API
import { UserApi } from "./user/UserApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    product: productReducer,
    bill: billReducer,
    theme: themeReducer,

    [UserApi.reducerPath]: UserApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(UserApi.middleware),
});

setupListeners(store.dispatch);
