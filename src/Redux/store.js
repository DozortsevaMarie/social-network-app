import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialoguesReducer from "./dialogues-reducer";

const reducers = combineReducers({
	profileReducer,
	dialoguesReducer,
})


 const store = createStore(reducers);
window.store = store;

export default store;