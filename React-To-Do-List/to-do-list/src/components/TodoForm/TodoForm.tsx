import "./to-do-form.estilos.css"
export function TodoForm(){
    return(
        <form action="" className="container-form">
            <label htmlFor="Tarefa">Digite uma tarefa:</label>
            <div className="container-submit">
                <input type="text" placeholder="Digite aqui" />
                <button id="add-tarefa">+</button>
            </div>
        </form>
    )
}