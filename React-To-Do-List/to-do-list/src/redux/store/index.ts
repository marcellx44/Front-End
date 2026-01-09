
//tipos 

type TaskType = {
    taskId: string;
    text: string;
}
type ListType = {
    listKey: string;
    nameList: string; //Nome da lista
    tasksList: TaskType[];
}
export type ReduxStateType={
    lists: ListType[];
}
