
export const ADD_STYLE= 'ADD_STYLE';

export type  StyleType = {
    id: string
    name: string
    status: boolean
}

type StateType={
    style: Array<StyleType>
}

const initialState: StateType = {
    style: [
        { id:'1', name: 'dark', status: false },
        { id: '2', name: 'green', status: false},
        { id: '3', name: 'light', status: true },
    ]
};


const SettingsReducer = (state:StateType = initialState, action:AddStyleActionType) => {
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

export const addStyleAC = (id: string, status: boolean):AddStyleActionType => {
    return {
        type: ADD_STYLE,
        id: id,
        status: status
    }
};
export type AddStyleActionType = {
    type: typeof ADD_STYLE
    id: string
    status: boolean
}


export default SettingsReducer
