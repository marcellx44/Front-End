import './App.css'
import {Layout} from "./components/Layout/Layout.tsx";
import { Header } from "./components/Header/Header.tsx";
import { Principal} from "./components/Principal/Principal.tsx";
import { Sidebar } from "./components/Sidebar/Sidebar.tsx";
function App() {

  return (
      <Layout>
        <Header>
          
        </Header>
        <Sidebar>

        </Sidebar>
        <Principal>

        </Principal>
      </Layout>
  )
}

export default App
