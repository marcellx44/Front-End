import { ItemContextProvider } from "../../App";
import "./to-do-item.estilos.css"
import { useContext } from "react";

type ItemType = {
  id: string;
  text: string;
}

export const TodoItem=({id, text}:ItemType)=>{
    const {removeTask} = useContext(ItemContextProvider)

    const handleRemove= (event: React.MouseEvent<HTMLButtonElement> )=>{
        removeTask(id)
    }
    return(
        <li className="container-item" key={id}>
            <input type="checkbox" id='check' />
            <p>{text}</p>
            <button id="excluir" onClick={handleRemove}>X</button>
        </li>
    )
}