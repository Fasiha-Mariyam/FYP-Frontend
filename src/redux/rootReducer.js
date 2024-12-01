import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";

// slices
import authReducer from "./slices/auth";
import cardReducer from "./slices/card"


// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: ["auth","card"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  card: cardReducer,
});

export { rootPersistConfig, rootReducer };
