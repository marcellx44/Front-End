import { ItemContextProvider } from "../../App";
import "./to-do-item.estilos.css"

type TaskType = {
  taskId: string;
  text: string;
}
export const TodoItem=({taskId, text}:TaskType)=>{
    //const {removeTask} = useContext(ItemContextProvider)

    // const handleRemove= ()=>{
    //     removeTask(id)
    // }
    return(
        <li className="container-item" key={taskId}>
            <input type="checkbox" id='check' />
            <p>{text}</p>
            <button id="excluir" >X</button>
        </li>
    )
}