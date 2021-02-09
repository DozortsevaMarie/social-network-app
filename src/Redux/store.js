import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";

const reducers = combineReducers({
	profileReducer,
})


 const store = createStore(reducers);
window.store = store;

export default store;