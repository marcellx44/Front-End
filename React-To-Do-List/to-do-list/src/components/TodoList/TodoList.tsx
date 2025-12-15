import "./to-do-list.estilos.css"
import { TodoForm } from "../../components/TodoForm/TodoForm.tsx";
export function TodoList(){
    return(
        <div className="container-todolist">
            <TodoForm></TodoForm>
             {/* <ul className="items-list">
                {items.map(
                    item =>(
                        <TodoItem > 
                            {item.text}
                        </TodoItem>
                )
                )}
            </ul>  */}
        </div>
    )
}