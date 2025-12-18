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
        const { items } = useContext(ItemContextProvider)
        return (
            <div className="container-todolist" id={key}> 
                <h1>{name}</h1>
                <TodoForm></TodoForm>
                <ul className="items-list">
                    {items.map(
                        item => (
                            <TodoItem id={item.id} text={item.text} >

                            </TodoItem>
                        )
                    )}
                </ul>
            </div>
        )
    }
}