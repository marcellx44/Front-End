import { ItemContextProvider } from "../../App";
import "./to-do-item.estilos.css"
import { useContext } from "react";


export const TodoItem=({taskId, text, listKey}:{taskId:string, text: string, listKey:string})=>{
    const {removeTask} = useContext(ItemContextProvider)

    const handleRemove= ()=>{
        removeTask(listKey, taskId)
    }
    return(
        <li className="container-item" key={taskId}>
            <input type="checkbox" id='check' />
            <p>{text}</p>
            <button id="excluir" onClick={handleRemove}>X</button>
        </li>
    )
}