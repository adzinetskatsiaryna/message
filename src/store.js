import {createStore} from "redux";


const initialState = {
    todolists: [
        {id: 0, title: 'what to learn', tasks: [
                {
                    id: 1,
                    title: 'Css',
                    isDone: false,
                    priority: 'hight',
                    created: new Date().toLocaleString(),
                    updated: '',
                    finished: ''
                }
            ]
        },
        {id: 1, title: 'what to bay', tasks: []}
    ],
    loading: false,
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODOLIST":
            let newTodoList = {
                id: (new Date()).getTime(),
                title: action.title,
                tasks: [],
            };

            return {
                ...state,
                todolists: [...state.todolists, newTodoList]
            };

        case "DELETE_TODOLIST":
            return {
                ...state,
                todolists: state.todolists.filter(tl=> tl.id!==action.todolistId)
            };

        case "ADD_TASK":
            let newTask = {
                id: (new Date()).getTime(),
                title: action.title,
                isDone: false,
                priority: 'low',
                created: new Date().toLocaleString(),
                updated: '',
                finished: '',
            };
            return {
                ...state,
                todolists: state.todolists.map(tl=>{
                    if (tl.id!==action.todolistId ){
                        return tl
                    } else {
                        return {
                            ...tl,
                            tasks: [...tl.tasks, newTask]

                        }
                    }
                })
            };

        case "CHENGE_STATUS":
            return {
                ...state,
                todolists: state.todolists.map(tl=>{
                    if(tl.id!==action.todolistId){
                        return tl
                    } else {
                        return {
                            ...tl,
                            tasks: tl.tasks.map(t=>{
                                if(t.id !== action.taskId){
                                    return t
                                } else {
                                    return {...t,
                                        isDone: action.isDone,
                                        finished: new Date().toLocaleString()
                                    }
                                }
                            })
                        }
                    }
                })
            };

        case "CHANGE_TYTLE":
            return {
                ...state,
                todolists: state.todolists.map(tl=>{
                    if(tl.id !== action.todolistId){
                        return tl
                    }else {
                        return {
                            ...tl,
                            tasks: tl.tasks.map(t=>{
                                if (t.id !== action.taskId){
                                    return t
                                } else {
                                    return {
                                        ...t,
                                        title: action.title,
                                        update: new Date().toLocaleString()
                                    }
                                }
                            })
                        }
                    }
                })
            }

        case "CHANGE_PRIORITY":
            return {
                ...state,
                todolists: state.todolists.map(tl=>{
                    if(tl.id !== action.todolistId){
                        return tl
                    }else {
                        return {
                            ...tl,
                            tasks: tl.tasks.map(t=>{
                                if(t.id !== action.taskId){
                                    return t
                                }else {
                                    return {
                                        ...t,
                                        priority: action.priority,
                                        update: new Date().toLocaleString(),
                                    }
                                }
                            })
                        }
                    }
                })
            };

        case "DELETE_TASK":
            return {
                ...state,
                todolists: state.todolists.map(tl=>{
                    if(tl.id !== action.todolistId){
                        return tl
                    } else {
                        return {
                            ...tl,
                            tasks: tl.tasks.filter(t=> t.id !== action.taskId)
                        }
                    }
                })
            };

        case "SET_LOADING":
            return {
                ...state,
                loading: action.loading
            };

        default:
            return state
    }

};


const store = createStore(reducer);
export default store
