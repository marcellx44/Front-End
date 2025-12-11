import "./to-do-item.estilos.css"
export function TodoItem(){
    return(
        <div className="container-item">
            <input type="checkbox" id='check' />
            <p>Variavel</p>
            <button id="excluir">X</button>
        </div>
    )
}