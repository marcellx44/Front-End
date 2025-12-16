import './App.css'
import { Header } from "./components/Header/Header.tsx";
import { Principal } from "./components/Principal/Principal.tsx";
import { Sidebar } from "./components/Sidebar/Sidebar.tsx";
import { TodoList } from './components/TodoList/TodoList.tsx';
import { useState, createContext } from "react";


type ItemType = {
  id: string;
  text: string;
}

// type ItemContextProviderType = {
//   items: ItemType[];
//   addTask: (text: string) => void
// }

// export const ItemContextProvider = createContext<ItemContextProviderType | undefined>(
//   undefined
// );

export const ItemContextProvider= createContext(
  {
    items:[{id:'', text:''}],
    addTask: (text: string)=>{}
  }
)

function App() {

  const [items, setItems] = useState<ItemType[]>([])

  const addTask = (text: string) => {
    setItems([...items, { id: items.length.toString(), text: text }]);
    console.log(items)
  }

  return (
    <ItemContextProvider.Provider value={{ items, addTask }}>
      <Header>

      </Header>
      <Sidebar>

      </Sidebar>
      <Principal>
        <TodoList>

        </TodoList>
      </Principal>
    </ItemContextProvider.Provider>
  )
}

export default App
