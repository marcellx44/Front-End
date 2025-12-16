import "./to-do-item.estilos.css"

type ItemType = {
  id: string;
  text: string;
}

export const TodoItem=({id, text}:ItemType)=>{
    return(
        <li className="container-item" key={id}>
            <input type="checkbox" id='check' />
            <p>{text}</p>
            <button id="excluir">X</button>
        </li>
    )
}