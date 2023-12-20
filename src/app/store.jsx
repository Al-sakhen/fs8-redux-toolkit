import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import themeSlice from "../features/theme/themeSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { tariqApi } from "../services/TariqApi";

const persistCounterConfig = {
    key: "counter-persist",
    storage,
};
const persistThemeConfig = {
    key: "theme-persist",
    storage,
};

const persistedCounterReducer = persistReducer(
    persistCounterConfig,
    counterSlice
);
const persistedThemeReducer = persistReducer(persistThemeConfig, themeSlice);

export const store = configureStore({
    reducer: {
        // slices [features]
        counter: persistedCounterReducer,
        theme: persistedThemeReducer,

        // api [services]
        tariqApi: tariqApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(
            tariqApi.middleware
        ),
});
export const persistor = persistStore(store);
