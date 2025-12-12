import "./to-do-form.estilos.css"
import { useState, type ChangeEvent } from "react";
import { useContext } from 'react';


export function TodoForm() {


    type ItemType = {
        id: string;
        text: string;
    }
    const [items, setItems] = useState<ItemType[]>([])

    function AddItem(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        setItems([...items, { id: items.length.toString(), text: text }]);
        console.log(items)
    }

    const [text, setText] = useState('');

    const ChangeText = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
        console.log(text);
    }

    return (
        <form action="" className="container-form">
            <label htmlFor="Tarefa">Digite uma tarefa:</label>
            <div className="container-submit">
                <input onChange={ChangeText} type="text" placeholder="Digite aqui" />
                <button onClick={AddItem} id="add-tarefa">+</button>
            </div>
        </form>
    )
}