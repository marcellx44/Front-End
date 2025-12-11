import './App.css'
import { Header } from "./components/Header/Header.tsx";
import { Principal} from "./components/Principal/Principal.tsx";
import { Sidebar } from "./components/Sidebar/Sidebar.tsx";
import { TodoList } from './components/TodoList/TodoList.tsx';
import { useState } from "react";

function App() {

//criar o tipo do item

// type Item= {
//   id: number;
//   text: string;
// }
// //declara o array junto com o useState
// const [lista, setLista ] = useState<Item[]>([]);
// function AdicionarItem(){
//   setLista()  
// }


  return (  
        <>
          <Header>
            
          </Header>
          <Sidebar>

          </Sidebar>
          <Principal>
            <TodoList>
              
            </TodoList>
          </Principal> 
        </>
  )
}

export default App
