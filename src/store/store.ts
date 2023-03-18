import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import userSlice from "./userSlice";
import productsSlice from "./ProductsSlice";
import FavoriteProductsSlice from "./FavoriteProductsSlice";
import BoughtProducts from "./BoughtProductsSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favoritesProducts", "boughtProducts", "user"],
};

const rootReducer = combineReducers({
  user: userSlice,
  products: productsSlice,
  favoritesProducts: FavoriteProductsSlice,
  boughtProducts: BoughtProducts,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
