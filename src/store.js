import {combineReducers, createStore} from "redux";
import TuesdayReducer from "./TuesdayReducer";
import SettingsReducer from "./SettingsReducer";
import WednesdayReducer from "./WednasdayReducer";

const reducer = combineReducers({
        tuesdayPage: TuesdayReducer,
        settingsReducer: SettingsReducer,
        wednesdayReducer: WednesdayReducer,
});

const store = createStore(reducer);
export default store
