import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import ViewLogin from "./Pages/ViewLogin"
import ViewRegister from "./Pages/ViewRegister"
import ViewChefBoss from "./Pages/ViewChefBoss"
import ViewAdministrador from "./Pages/ViewAdministrador"
import RegisterPedido from "./Pages/RegisterPedido"
import OrdenesDelivering from './Components/OrdenesDelivery'
import ViewWeiter from './Pages/ViewWeiter'
import OrdenesDeliveredWeiter from './Components/OrdenesDeliveredWeiter'
import OrdenesDeliveringWeiter from './Components/OrdenesDeliveringWeiter'

function App() {
return (
  <Router>
    <Routes>
    <Route path = "/" element = {< ViewLogin />}> </Route>
    <Route path = "/Register" element = {< ViewRegister />}/>
    <Route path = "/Weiter" element = {<ViewWeiter/>}/>
    <Route path = "/RegisterPedido" element = { <RegisterPedido />} />
    <Route path = "/ChefBoss" element = {< ViewChefBoss />}/>
    <Route path = "/Administrador" element = {< ViewAdministrador />}/>
    <Route path = "/PedidoDelivering" element = {< OrdenesDelivering />}/>
    <Route path = "/PedidoDeliveredWeiter" element = {< OrdenesDeliveredWeiter />}/>
    <Route path = "/PedidoDeliveringWeiter" element = {< OrdenesDeliveringWeiter />}/>
    </Routes>
  </Router>
  
)
}

export default App
