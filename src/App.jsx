import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import './App.css'
import ViewLogin from "./Pages/ViewLogin"
import ViewRegister from "./Pages/ViewRegister"
import ViewChefBoss from "./Pages/ViewChefBoss"
import ViewAdministrador from "./Pages/ViewAdministrador"
import ViewWeiter from "./PAges/ViewWeiter"
import Menu from "./Pages/Menu"

function App() {
return (
  <Router>
    <Routes>
    <Route path = "/" element = {< ViewLogin />}> 
    </Route>
    <Route path = "/Register" element = {< ViewRegister />}/>
    <Route path = "/Weiter" element = {<ViewWeiter />}/>
    <Route path = "/Menu>" element = { <Menu/>} />
    <Route path = "/ChefBoss" element = {< ViewChefBoss />}/>
    <Route path = "/Administrador" element = {< ViewAdministrador />}/>
    </Routes>
  </Router>
  
)
}

export default App
