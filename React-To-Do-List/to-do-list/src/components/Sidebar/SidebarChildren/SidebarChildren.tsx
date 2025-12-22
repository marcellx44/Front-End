import { useContext, useState } from "react"
import "./sidebar-children.styles.css"
import { ItemContextProvider } from "../../../App.jsx";
export function SidebarChildren() {
    const { addList } = useContext(ItemContextProvider)
    const [name, setName] = useState('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const handleClick = () => {
        if (name != '') {
            addList(name)
            setName('')
        }
    }

    return (
        <div className="container-children-sidebar">
            <div className="container-create-list">
                <label htmlFor="">
                    Criar Lista
                </label>
                <button onClick={handleClick} id="btn-create-list">+</button>
            </div>
            <div className="container-name-list">
                <label htmlFor="">Nome da lista:</label>
                <input onChange={handleChange} type="text" value={name}/>
                <button onClick={handleClick}>Criar</button>
            </div>
        </div>
    )
}