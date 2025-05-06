import { configureStore } from "@reduxjs/toolkit";
import  feedReducer  from "./feedSlice"

import  useReducer  from "./userSlice"
const appStore = configureStore({
reducer:{
    user:useReducer,
    Feed:feedReducer
}

})

export default appStore;
