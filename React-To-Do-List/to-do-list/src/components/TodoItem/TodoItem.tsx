import { DialogContentText } from "@mui/material";
import "./to-do-item.estilos.css"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { SDialog } from "./SDialog";

// const DialogTheme = createTheme({
//     palette: {
//         primary:{
//             main: '#1976d2'
//         }
//     }
// })


export const TodoItem = ({ taskId, text, listKey }: { taskId: string, text: string, listKey: string }) => {
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    }

    const handleRemove = () => {
        //removeTask(listKey, taskId)
        dispatch({type: 'removetask', payload:{listKey: listKey, taskId: taskId}})
    }
    return (
     
            <li className="container-item" key={taskId}>
                <input type="checkbox" id='check' />
                <p>{text}</p>
                <a href="#" onClick={handleClickOpen}>Exibir detalhes</a>
                <SDialog
                    open= {open}
                    onClose= {handleClose}
                >
                    <DialogContentText>{text}</DialogContentText>
                </SDialog>
                <button id="excluir" onClick={handleRemove}>X</button>
            </li >
      
    )
}