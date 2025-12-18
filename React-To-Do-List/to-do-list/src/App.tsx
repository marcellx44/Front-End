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
type ListType={
       key: string;
       name: string; //Nome da lista
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
    addTask: (text: string)=>{},
    removeTask: (id: string)=>{},
    addList: (name: string)=>{}
  }
)

function App() {
  
  const [items, setItems] = useState<ItemType[]>([])
  const [lists, setLists] = useState<ListType[]>([]); //lista de to do lists

  const addTask = (text: string) => {
    setItems([...items, { id: items.length.toString(), text: text }]);
    console.log(items)
  }

  const removeTask= (id: string)=>{
    setItems(items=> items.filter(item=>item.id !== id));
  }

  const addList= (name: string)=>{ //funcao de adicionar listas
    setLists([...lists, {key: lists.length.toString(), name: name}]);
  }

  return (
    <ItemContextProvider.Provider value={{ items, addTask, removeTask, addList }}>
      <Header>

      </Header>
      <Sidebar>

      </Sidebar>
      <Principal>
      <ul>
        {
          lists.map(
            list=>(
              <TodoList key={list.key} name={list.name}>

              </TodoList>
            )
          )
        }
      </ul>
    
      </Principal>
    </ItemContextProvider.Provider>
  )
}

export default App
