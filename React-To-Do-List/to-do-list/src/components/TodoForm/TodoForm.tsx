import "./to-do-form.estilos.css"
import { TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const TodoForm = ({ listKey }: { listKey: string }) => {
    const [text, setText] = useState('');
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (text != '') {
            const dispatch = useDispatch();
            dispatch({type: 'addtask', payload:{text: text, listKey: listKey}})
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