import "./to-do-form.estilos.css"
import { useContext, useState } from "react";
import { ItemContextProvider } from "../../App";

export function TodoForm() {
    const [text, setText] = useState('');
    const {addTask} = useContext(ItemContextProvider); // pega o valor do Provider

    const handleClick = (event: React.MouseEvent<HTMLButtonElement> ) => {
        event.preventDefault();
        if(text!=''){
            addTask(text);
        }
        setText('');
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
    }
    return (
        <form action="" className="container-form">
            <label htmlFor="Tarefa">Digite uma tarefa:</label>
            <div className="container-submit">
                <input onChange={handleChange} type="text" placeholder="Digite aqui" value={text} />
                <button onClick={handleClick} id="add-tarefa">+</button>
            </div>
        </form>
    )
}