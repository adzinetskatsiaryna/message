import {api} from "./api/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./store";
import {AddStyleActionType} from "./SettingsReducer";

export const CHECK_INPUT = 'CHECK_INPUT';
export const SET_SENDING_REQUEST = 'SET_SENDING_REQUEST';
export const SET_LOADING = 'IS_LOADING';
export const SET_STATUS = 'SET_STATUS';

export type statusStringType = 'POST_DATA' | 'ERROR' | 'INPROGRESS' | 'SUCCESS'

export type StatusesType = {
    POST_DATA: 'POST_DATA'
    ERROR: 'ERROR'
    INPROGRESS: 'INPROGRESS'
    SUCCESS: 'SUCCESS'
}
export const statuses: StatusesType = {
    POST_DATA: 'POST_DATA',
    ERROR: 'ERROR',
    INPROGRESS: 'INPROGRESS',
    SUCCESS: 'SUCCESS'
};

type StateType = {
    isCheck: boolean
    isSendingRequest: boolean
    isLoading: boolean
    status: statusStringType
}

const initialState: StateType = {
    isCheck: false,
    isSendingRequest: false,
    isLoading: false,
    status: statuses.POST_DATA
};

const WednesdayReducer = (state: StateType = initialState, action: ActionType):StateType => {
    switch (action.type) {

        case CHECK_INPUT:
            return {
                ...state,
                isCheck: action.checked
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };

        case SET_LOADING:
            return {
                ...state,
                isLoading: action.loading
            };
        case SET_SENDING_REQUEST:
            return {
                ...state,
                isSendingRequest: action.request
            }

        default:
            return state
    }

};

type ActionType = checkInputACType | setStatusACType | setLoadingACType | setSendingRequestACType | AddStyleActionType

export const checkInputAC = (checked: boolean): ActionType => {
    return {
        type: CHECK_INPUT,
        checked
    }
};


type checkInputACType = {
    type: typeof CHECK_INPUT
    checked: boolean
}
export const setStatusAC = (status: statusStringType): ActionType => {
    return {
        type: SET_STATUS,
        status
    }
};
type setStatusACType = {
    type: typeof SET_STATUS
    status: statusStringType
}
export const setLoadingAC = (loading: boolean): ActionType => {
    return {
        type: SET_LOADING,
        loading
    }
};

type  setLoadingACType = {
    type: typeof SET_LOADING
    loading: boolean

}

export const setSendingRequestAC = (request: boolean): ActionType => {
    return {
        type: SET_SENDING_REQUEST,
        request
    }
}

type setSendingRequestACType = {
    type: typeof SET_SENDING_REQUEST
    request: boolean
}


type ThunkType = ThunkAction<void, AppStateType, unknown, ActionType>
export type DispatchType = ThunkDispatch<AppStateType, unknown, ActionType>

export const setResponseTC = (status: boolean): ThunkType => (dispatch: DispatchType) => {

    dispatch(setStatusAC('INPROGRESS'));
    dispatch(setLoadingAC(true));
    dispatch(setSendingRequestAC(true));
    api.getRespons(status)
        .then(response => {
            console.log(response.data);
            dispatch(setStatusAC("SUCCESS"));
            dispatch(setLoadingAC(false));
            dispatch(setSendingRequestAC(false))
        })
        .catch(error => {
            dispatch(setStatusAC('ERROR'));
            dispatch(setSendingRequestAC(false));
            dispatch(setLoadingAC(false));
        })
}

export default WednesdayReducer
