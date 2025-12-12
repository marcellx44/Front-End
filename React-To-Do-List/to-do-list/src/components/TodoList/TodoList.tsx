import "./to-do-list.estilos.css"
import { TodoForm } from "../../components/TodoForm/TodoForm.tsx";
import { TodoItem } from "../TodoItem/TodoItem.tsx";
export function TodoList(){
    return(
        <div className="container-todolist">
            <TodoForm></TodoForm>
            {/* <ul className="items-list">
                {items.map(
                    item =>(
                        <TodoItem key={item.id}> 
                            {item.text}
                        </TodoItem>
                )
                )}
            </ul> */}
        </div>
    )
}