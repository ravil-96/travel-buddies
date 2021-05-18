import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";


import rootReducer from "./reducer";

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(
  persistConfig,
  rootReducer);
let store = createStore(
  persistedReducer);
let persistor = persistStore(store);

export default { store, persistor }

