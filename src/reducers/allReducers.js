import contactReducer from "./contactReducer";
import incrementReducer from "./incrementReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    contactReducer,
    incrementReducer,
})

export default allReducers;