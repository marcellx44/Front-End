import "./to-do-list.estilos.css"
import { TodoForm } from "../../components/TodoForm/TodoForm.tsx";
import { ItemContextProvider } from "../../App.tsx";
import { useContext } from "react";
import { TodoItem } from "../TodoItem/TodoItem.tsx";

export function TodoList(){
    const {items} = useContext(ItemContextProvider )
    return(
        <div className="container-todolist">
            <TodoForm></TodoForm>
              <ul className="items-list">
                {items.map(
                    item =>(
                        <TodoItem id={item.id} text={item.text} > 
                            
                        </TodoItem>
                )
                )}
            </ul>  
        </div>
    )
}