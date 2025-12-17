import "./sidebar.estilos.css"
import { SidebarChildren } from "./SidebarChildren/SidebarChildren.tsx";
export function Sidebar(){
    return(
        <nav className="container-sidebar">
            <SidebarChildren></SidebarChildren>
        </nav>
    )
}