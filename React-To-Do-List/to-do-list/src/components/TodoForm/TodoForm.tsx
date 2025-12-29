import "./to-do-form.estilos.css"
import { TextField, Button } from "@mui/material";
import { useContext, useState } from "react";
import { ItemContextProvider } from "../../App";

export const TodoForm = ({ listKey }: { listKey: string }) => {
    const [text, setText] = useState('');
    const { addTask } = useContext(ItemContextProvider); // pega o valor do Provider
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (text != '') {
            addTask(text, listKey)
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
                <TextField id="outlined-basic" label="Tarefa" variant="outlined" onChange={handleChange} value={text} size="small" />
                <button onClick={handleClick} id="add-tarefa">+</button>
            </div>
        </form>
    )
}