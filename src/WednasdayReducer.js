
export const CHECK_INPUT='CHECK_INPUT';

const initialState = {
   isCheck: false
};


const  WednesdayReducer = (state = initialState, action) => {
    switch (action.type) {

        case CHECK_INPUT:
            return {
                ...state,
                isCheck: action.checked
            };

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



export default  WednesdayReducer
