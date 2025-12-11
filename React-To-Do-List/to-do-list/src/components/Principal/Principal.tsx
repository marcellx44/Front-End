import "./principal.estilos.css"
export function Principal({children}: {children:React.ReactNode}){
    return(
        <main className="container-principal">
            {children}
        </main>
    )
}