import "./to-do-item.estilos.css"

type TodoItemType={
    key:string;
    text:string;
}

export const TodoItem=({key, text}:TodoItemType)=>{
    return(
        <li className="container-item" key={key}>
            <input type="checkbox" id='check' />
            <p>{text}</p>
            <button id="excluir">X</button>
        </li>
    )
}