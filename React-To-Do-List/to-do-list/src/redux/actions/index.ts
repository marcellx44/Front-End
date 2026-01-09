//type das actions 

type AddList = {
    type: 'addlist'
    payload: string
}

export const addList = (nameList: string): AddList => {
    return {
        type: 'addlist',
        payload: nameList
    }
}

type AddTask = {
    type: 'addtask'
    payload: {
        text: string,
        listKey:string
    }
}

export const addTask = (text:string, listKey:string): AddTask => {
    return {
        type: 'addtask',
        payload: {
            text,
            listKey
        }
    }
}

type RemoveTask = {
    type: 'removetask'
    payload:{
        listKey: string,
        taskId: string
    }
}

export const removeTask = (listKey: string, taskId: string): RemoveTask => {
    return {
        type: 'removetask',
        payload: {listKey, taskId}
    }
}

export type ReduxActionType =
    | AddList
    | AddTask
    | RemoveTask