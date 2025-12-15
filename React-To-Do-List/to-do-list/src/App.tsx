import './App.css'
import { Header } from "./components/Header/Header.tsx";
import { Principal } from "./components/Principal/Principal.tsx";
import { Sidebar } from "./components/Sidebar/Sidebar.tsx";
import { TodoList } from './components/TodoList/TodoList.tsx';
import { useContext, useState, createContext } from "react";
import { ItemContextProvider } from "./components/TodoForm/context-item.tsx";

function App() {
  // type ItemType = {
  //   id: string;
  //   text: string;
  // }

  // const [items, setItems] = useState<ItemType[]>([])
  
  // const ItemContextProvider = createContext(
  //   {
  //     list: items, //lista é do tipo items ou recebe items?
  //     addTask: function (text: string) {
  //       setItems([...items, { id: items.length.toString(), text: text }]);
  //       console.log(items)
  //     }
  //   }
  // );
  
   const { list, addTask } = useContext(ItemContextProvider)


  return (
    <ItemContextProvider.Provider value={{ list, addTask }}>
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
