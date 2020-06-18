
export const ADD_STYLE= 'ADD_STYLE';

const initialState = {
    style: [
        { id: 1, name: 'dark', status: false },
        { id: 2, name: 'light', status: false },
        { id: 3, name: 'green', status: true },
    ]
};


const SettingsReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_STYLE:
            return {
                ...state,
                style: state.style.map(s=>{
                    if(s.id !== action.id){
                        return {...s, status: false}
                    } else {
                        return {...s,
                            status: action.status,
                        }
                    }
                })
            };

        default:
            return state
    }

};

export const addStyleAC = (id, status) => {
    return {
        type: ADD_STYLE,
        id: id,
        status: status
    }
};



export default SettingsReducer
