import './App.css'
import { Header } from "./components/Header/Header.tsx";
import { Principal } from "./components/Principal/Principal.tsx";
import { Sidebar } from "./components/Sidebar/Sidebar.tsx";
import { TodoList } from './components/TodoList/TodoList.tsx';
import { useState, createContext } from "react";

type TaskType = {
  taskId: string;
  text: string;
}
type ListType = {
  listKey: string;
  name: string; //Nome da lista
  tasksList: TaskType[];
}

// type ItemContextProviderType = {
//   items: ItemType[];
//   addTask: (text: string) => void
// }

// export const ItemContextProvider = createContext<ItemContextProviderType | undefined>(
//   undefined
// );

export const ItemContextProvider = createContext(
  {
    //items: [{ id: '', text: '' }],
    lists: [
      {
        listKey: '0',
        name: '',
        tasksList: [
          {
            taskId: '',
            text: ''
          }
        ]
      }
    ],
    addTask: (text: string, listKey: string) => { },
    removeTask: (listKey:string, taskId:string) => { },
    addList: (name: string) => { }
  }
)

function App() {

  const [lists, setLists] = useState<ListType[]>([]); //lista de to do lists
  //const [items, setItems] = useState<ItemType[]>([])
  const addTask = (text: string, listKey: string) => {
    //setItems([...items, { itemId: items.length.toString(), text: text }]);

    const copyList = lists.map(
      list => {
        if (list.listKey === listKey) {
          const updatedList = { //cria um novo objeto to do list
            ...list,
            tasksList: [...list.tasksList, { taskId: 'item-' + list.tasksList.length.toString(), text: text }] //adiciona o item novo
          }
          //setLists([...lists, updatedList]) //adiciona a lista com listKey duplicado 
          return updatedList;
        }
        return list;
      }
    )
    setLists(copyList)
    console.log(lists)
  }

  const removeTask = (listKey:string, taskId: string) => {
    const copyList = lists.map(
      list=>{
        if(list.listKey===listKey){
          const updatedList = {
            ...list, 
            tasksList: list.tasksList.filter(
              task=> task.taskId !== taskId
            )
          }
          return updatedList;
        }
        return list;
      }
    )
    setLists(copyList)
  }

  const addList = (name: string) => { //funcao de adicionar listas
    setLists([...lists,
    {
      listKey: 'list-' + lists.length.toString(),
      name: name,
      tasksList: []
    }]);
  }

  return (
    <ItemContextProvider.Provider value={{ lists, addTask, removeTask, addList }}>
      <Header>

      </Header>
      <Sidebar>

      </Sidebar>
      <Principal>
        <ul className='container-lists'>
          {
            lists.map(
              list => (
                <TodoList key={list.listKey} name={list.name} listKey={list.listKey

                }>
                  
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
