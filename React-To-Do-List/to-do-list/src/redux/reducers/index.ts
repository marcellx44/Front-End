import reduceReducers from "reduce-reducers"; // biblioteca que combina vários reducers em um mesmo estado 
import type { ReduxStateType } from "../store";
import type { ReduxActionType } from "../actions";

// estado inicial 
const initialState: ReduxStateType = {
    lists: []
}
//o meu reducer

export const reducer = (state: ReduxStateType = initialState, action: ReduxActionType): ReduxStateType => {
    // colocar as actions de acordo com o type 
    switch (action.type) {
        case 'addlist':
            return {
                ...state, lists:[...state.lists, {
                    listKey: 'list-' + state.lists.length.toString(),
                    nameList: action.payload,
                    tasksList: []
                }
                ]
            }
        case 'addtask':
            const newList = state.lists.map(
                list => {
                    if (list.listKey === action.payload.listKey) {
                        const updatedList = { //cria um novo objeto to do list
                            ...list,
                            tasksList: [...list.tasksList, { taskId: 'item-' + list.tasksList.length.toString(), text: action.payload.text }] //adiciona o item novo
                        }
                        return updatedList;
                    }
                    return list;
                }
            )
            return {...state, lists: newList};
        case 'removetask':
            const copyList = state.lists.map(
                list => {
                    if (list.listKey === action.payload.listKey) {
                        const updatedList = {
                            ...list,
                            tasksList: list.tasksList.filter(
                                task => task.taskId !== action.payload.taskId
                            )
                        }
                        return updatedList;
                    }
                    return list;
                }
            )
            return {...state, lists: copyList}
    }
}

// exportar o nosso reducer 

export const rootReducer = reduceReducers(reducer);
