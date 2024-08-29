import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import registerReducer from "./features/RegisterSlice";
import loginReducer from "./features/loginSlice";
import { baseApi } from "./baseApi/baseApi";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./features/userSlice";

const persistUserConfig = {
  key: "user",
  storage,
};
const persistedUserReducer = persistReducer(persistUserConfig, userReducer);

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    cart: cartReducer,
    register: registerReducer,
    login: loginReducer,
    user: persistedUserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      baseApi.middleware
    ),
});
export const persistor = persistStore(store);
// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
