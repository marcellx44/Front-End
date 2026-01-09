import "./to-do-list.estilos.css"
import { TodoForm } from "../../components/TodoForm/TodoForm.tsx";
import { TodoItem } from "../TodoItem/TodoItem.tsx";
import type { ReduxStateType } from "../../redux/store/index.ts";
import { useSelector } from "react-redux";

export const TodoList = ({ name, listKey }: { name: string, listKey: string }) => {
    {
        const lists= useSelector((state: ReduxStateType)=> state.lists);
        const chosenList= lists.find(list => list.listKey=== listKey)
        return (
            <div className="container-todolist" id={listKey}>
                <h1>{name}</h1>
                <TodoForm listKey={listKey}></TodoForm>
                <ul className="items-list">
                    {chosenList?.tasksList.map(
                        task=>
                            <TodoItem taskId={task.taskId} text={task.text} listKey={listKey}></TodoItem>
                    )}
                </ul>
            </div>
        )
    }
}