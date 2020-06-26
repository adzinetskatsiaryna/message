
export const CHECK_INPUT ='CHECK_INPUT';
export const SET_SENDING_REQUEST ='SET_SENDING_REQUEST';
export const SET_LOADING ='IS_LOADING';
export const SET_STATUS ='SET_STATUS';


export const statuses={
    POST_DATA: 'POST_DATA',
    ERROR: 'ERROR',
    INPROGRESS: 'INPROGRESS',
    SUCCESS: 'SUCCESS'
};

const initialState = {
   isCheck: false,
    isSendingRequest: false,
    isLoading: false,
    status: statuses.POST_DATA
};

const  WednesdayReducer = (state = initialState, action) => {
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

export const checkInputAC = (checked) => {
    return {
        type: CHECK_INPUT,
        checked
    }
};

export const setStatusAC=(status)=>{
    return {
        type: SET_STATUS,
        status
    }
}

export const setLoadingAC=(loading)=>{
    return{
        type: SET_LOADING,
        loading
    }
}

export const setSendingRequestAC =(request)=>{
    return{
        type: SET_SENDING_REQUEST,
        request
    }
}

export default  WednesdayReducer
