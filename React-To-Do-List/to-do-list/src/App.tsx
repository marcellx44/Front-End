import { useSelector } from 'react-redux';
import './App.css'
import { Header } from "./components/Header/Header.tsx";
import { Principal } from "./components/Principal/Principal.tsx";
import { Sidebar } from "./components/Sidebar/Sidebar.tsx";
import { TodoList } from './components/TodoList/TodoList.tsx';
import type { ReduxStateType } from './redux/store/index.ts';

// type TaskType = {
//   taskId: string;
//   text: string;
// }
// type ListType = {
//   listKey: string;
//   name: string; //Nome da lista
//   tasksList: TaskType[];
// }

// export const ItemContextProvider = createContext(
//   {
//     lists: [
//       {
//         listKey: '',
//         name: '',
//         tasksList: [
//           {
//             taskId: '',
//             text: ''
//           }
//         ]
//       }
//     ],
//     addTask: (text: string, listKey: string) => { },
//     removeTask: (listKey: string, taskId: string) => { },
//     addList: (name: string) => { }
//   }
// )

function App() {
//   type Action =
//     | { type: 'addTask', payload: { text: string, listKey: string } }
//     | { type: 'removeTask', payload: { listKey: string, taskId: string } }
//     | { type: 'addList', payload: { name: string } }


//   const reducer = (lists: ListType[], action: Action) => {
//     switch (action.type) {
//       case ('addTask'):
//         const newList = lists.map(
//           list => {
//             if (list.listKey === action.payload.listKey) {
//               const updatedList = { //cria um novo objeto to do list
//                 ...list,
//                 tasksList: [...list.tasksList, { taskId: 'item-' + list.tasksList.length.toString(), text: action.payload.text }] //adiciona o item novo
//               }
//               return updatedList;
//             }
//             return list;
//           }
//         )
//         return newList;
//       case ('removeTask'):
//         const copyList = lists.map(
//           list => {
//             if (list.listKey === action.payload.listKey) {
//               const updatedList = {
//                 ...list,
//                 tasksList: list.tasksList.filter(
//                   task => task.taskId !== action.payload.taskId
//                 )
//               }
//               return updatedList;
//             }
//             return list;
//           }
//         )
//         return copyList
//       case ('addList'):
//         return [...lists, {
//           listKey: 'list-' + lists.length.toString(),
//           name: action.payload.name,
//           tasksList: []
//         }]
//     }
//   }

//   const [lists, dispatch] = useReducer(reducer, []); //lista de to do lists
  // const addTask = (text: string, listKey: string) => {

  //   const newList = lists.map(
  //     list => {
  //       if (list.listKey === listKey) {
  //         const updatedList = { //cria um novo objeto to do list
  //           ...list,
  //           tasksList: [...list.tasksList, { taskId: 'item-' + list.tasksList.length.toString(), text: text }] //adiciona o item novo
  //         }
  //         return updatedList;
  //       }
  //       return list;
  //     }
  //   )
  //   return (newList);
  // }

  // const removeTask = (listKey: string, taskId: string) => {
  //   const copyList = lists.map(
  //     list => {
  //       if (list.listKey === listKey) {
  //         const updatedList = {
  //           ...list,
  //           tasksList: list.tasksList.filter(
  //             task => task.taskId !== taskId
  //           )
  //         }
  //         return updatedList;
  //       }
  //       return list;
  //     }
  //   )
  //   setLists(copyList)
  // }

  // const addTask = (text: string, listKey: string) => {
  //   dispatch({ type: 'addTask', payload: { text, listKey } })
  // }

  // const removeTask = (listKey: string, taskId: string) => {
  //   dispatch({ type: 'removeTask', payload: { listKey, taskId } })
  // }

  // const addList = (name: string)=>{
  //   dispatch({type: 'addList', payload: {name: name}})
  // }

  // const addList = (name: string) => { //funcao de adicionar listas
  //   setLists([...lists,
  // {
  //   listKey: 'list-' + lists.length.toString(),
  //   name: name,
  //   tasksList: []
  // }]);
  // }
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
