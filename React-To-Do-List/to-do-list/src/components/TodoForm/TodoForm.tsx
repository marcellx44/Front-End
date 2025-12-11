import "./to-do-form.estilos.css"
import { useState, type ChangeEvent } from "react";

export function TodoForm(){
    const [texto, setTexto]= useState('');

    const MudarTexto= (elemento: ChangeEvent<HTMLInputElement> )=>{
        setTexto(elemento.target.value)
        console.log(texto);
    }

    return(
        <form action="" className="container-form">
            <label htmlFor="Tarefa">Digite uma tarefa:</label>
            <div className="container-submit">
                <input onChange={MudarTexto} type="text" placeholder="Digite aqui" />
                <button id="add-tarefa">+</button>
            </div>
        </form>
    )
}