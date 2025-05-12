import { configureStore } from "@reduxjs/toolkit";
import feedReducer from "./feedSlice";
import userReducer from "./userSlice";
import connectionReducer from "./connectionSlice";
import requestReducer from "./RequestSlice"; // ✅ Corrected

const appStore = configureStore({
  reducer: {
    user: userReducer,
    Feed: feedReducer,
    connections: connectionReducer,
    request: requestReducer,
  },
});

export default appStore;
