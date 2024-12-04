import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";

// slices
import authReducer from "./slices/auth";
import cardReducer from "./slices/card";
import feedbackReducer from "./slices/feedback";
import trackingReducer from "./slices/tracking";

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: ["auth","card","feedback","tracking"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  card: cardReducer,
  feedback : feedbackReducer,
  tracking:trackingReducer,
});

export { rootPersistConfig, rootReducer };
