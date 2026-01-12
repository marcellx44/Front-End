import { useSelector } from 'react-redux';
import './App.css'
import { Header } from "./components/Header/Header.tsx";
import { Principal } from "./components/Principal/Principal.tsx";
import { Sidebar } from "./components/Sidebar/Sidebar.tsx";
import { TodoList } from './components/TodoList/TodoList.tsx';
import type { ReduxStateType } from './redux/store/index.ts';

function App() {

const lists = useSelector((state:ReduxStateType)=> state.lists)

  return (
    <>
      <Header>

      </Header>
      <Sidebar>

      </Sidebar>
      <Principal>
        <ul className='container-lists'>
          {
            lists.map(
              list => (
                <TodoList key={list.listKey} name={list.nameList} listKey={list.listKey

                }>

                </TodoList>
              )
            )
          }
        </ul>

      </Principal>
    </>
  )
}

export default App
