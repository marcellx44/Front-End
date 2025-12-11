import './App.css'
import { Header } from "./components/Header/Header.tsx";
import { Principal} from "./components/Principal/Principal.tsx";
import { Sidebar } from "./components/Sidebar/Sidebar.tsx";
import { TodoList } from './components/TodoList/TodoList.tsx';
function App() {

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
