import "./sidebar.estilos.css"
export function Sidebar(){
    return(
        <nav className="container-sidebar">
            <div className="container-create-list">
                <label htmlFor="">
                    Criar Lista
                </label>
                <button id="btn-create-list">+</button>
            </div>
        </nav>
    )
}