import "./to-do-list.estilos.css"
import { TodoForm } from "../../components/TodoForm/TodoForm.tsx";
import { ItemContextProvider } from "../../App.tsx";
import { useContext } from "react";
import { TodoItem } from "../TodoItem/TodoItem.tsx";

export const TodoList = ({ name, listKey }: { name: string, listKey: string }) => {
    {
        const { lists } = useContext(ItemContextProvider)
        const chosenList= lists.find(list => list.listKey=== listKey)
        return (
            <div className="container-todolist" id={listKey}>
                <h1>{name}</h1>
                <TodoForm listKey={listKey}></TodoForm>
                <ul className="items-list">
                    {chosenList?.tasksList.map(
                        task=>
                            <TodoItem taskId={task.taskId} text={task.text}></TodoItem>
                    )}
                </ul>
            </div>
        )
    }
}