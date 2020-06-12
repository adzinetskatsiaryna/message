import {combineReducers, createStore} from "redux";
import TuesdayReducer from "./TuesdayReducer";
import SettingsReducer from "./SettingsReducer";

const reducer = combineReducers({
        tuesdayPage: TuesdayReducer,
        settingsReducer: SettingsReducer
});

const store = createStore(reducer);
export default store
