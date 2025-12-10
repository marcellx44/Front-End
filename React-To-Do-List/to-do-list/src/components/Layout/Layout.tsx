import "./layout.estilos.css";
export function Layout({children}:{children: React.ReactNode}){
    return(
        <div className="container-layout">
            {children}
            <p>A</p>
        </div>
    )
}