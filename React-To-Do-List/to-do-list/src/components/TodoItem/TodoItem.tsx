import { createTheme, Dialog, DialogContentText } from "@mui/material";
import "./to-do-item.estilos.css"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { ReduxStateType } from "../../redux/store";

const DialogTheme = createTheme({
    palette: {
        primary:{
            main: '#1976d2'
        }
    }
})


export const TodoItem = ({ taskId, text, listKey }: { taskId: string, text: string, listKey: string }) => {
    const [open, setOpen] = useState(false)
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    }

    const handleRemove = () => {
        //removeTask(listKey, taskId)
        const dispatch = useDispatch()
        dispatch({type: 'removetask', payload:{listKey: listKey, taskId: taskId}})
    }
    return (
     
            <li className="container-item" key={taskId}>
                <input type="checkbox" id='check' />
                <p>{text}</p>
                <a href="#" onClick={handleClickOpen}>Exibir detalhes</a>
                <Dialog
                    open= {open}
                    onClose= {handleClose}
                >
                    <DialogContentText>{text}</DialogContentText>
                </Dialog>
                <button id="excluir" onClick={handleRemove}>X</button>
            </li >
      
    )
}