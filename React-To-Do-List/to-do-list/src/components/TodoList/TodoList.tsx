import "./to-do-list.estilos.css"
import { TodoForm } from "../../components/TodoForm/TodoForm.tsx";
import { ItemContextProvider } from "../../App.tsx";
import { useContext } from "react";
import { TodoItem } from "../TodoItem/TodoItem.tsx";

type ListType = {
    key: string;
    name: string; //Nome da lista
}

export const TodoList = ({ key, name }: ListType) => {
    {
        const { lists } = useContext(ItemContextProvider)
        const todolist= lists;
        return (
            <div className="container-todolist" id={key}> 
                <h1>{name}</h1>
                <TodoForm></TodoForm>
                <ul className="items-list">
                    {todolist.tasksList.map(
                        task => (
                            <TodoItem taskId={task.taskId} text={task.text} >

                            </TodoItem>
                        )
                    )}
                </ul>
            </div>
        )
    }
}