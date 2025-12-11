import "./to-do-list.estilos.css"
import { TodoForm } from "../../components/TodoForm/TodoForm.tsx";
export function TodoList({children}:{children:React.ReactNode}){
    return(
        <div className="container-todolist">
            <TodoForm>
                
            </TodoForm>
        </div>
    )
}