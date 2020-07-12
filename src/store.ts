import {applyMiddleware, combineReducers, createStore} from "redux";
import TuesdayReducer from "./TuesdayReducer";
import SettingsReducer from "./SettingsReducer";
import WednesdayReducer from "./WednasdayReducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
    tuesdayPage: TuesdayReducer,
    settingsReducer: SettingsReducer,
    wednesdayReducer: WednesdayReducer,
});

type ReducerType = typeof reducer
export type AppStateType = ReturnType<ReducerType>

const store = createStore(reducer, applyMiddleware(thunk));
export default store
