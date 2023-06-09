import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import ViewLogin from "./Pages/ViewLogin"
import ViewChefBoss from "./Pages/ViewChefBoss"
import ViewAdministrador from "./Pages/ViewAdministrador"
import RegisterPedido from "./Components/weiter/RegisterPedido/RegisterPedido"
import ViewWeiter from './Pages/ViewWeiter'
import OrdenesDeliveredWeiter from './Components/weiter/Orders/OrdenesDeliveredWeiter'
import OrdenesDeliveringWeiter from './Components/weiter/Orders/OrdenesDeliveringWeiter'
import RegisterUsers from './Components/admin/Colaboradores/RegisterUsers'
import OrdenesDelivering from './Components/cheffBoss/OrdenesDelivery'
import ProductsOfAdministrador from './Components/admin/products/ProductsOfAdministrador'
import RegisterProductos from './Components/admin/products/RegisterProductos'

function App() {
return (
  <Router>
    <Routes>
    <Route path = "/" element = {< ViewLogin />}> </Route>
    <Route path = "/RegisterUsers" element = {< RegisterUsers />}/>
    <Route path = "/Weiter" element = {<ViewWeiter/>}/>
    <Route path = "/RegisterPedido" element = { <RegisterPedido />} />
    <Route path = "/ChefBoss" element = {< ViewChefBoss />}/>
    <Route path = "/Administrador" element = {< ViewAdministrador />}/>
    <Route path = "/PedidoDelivering" element = {< OrdenesDelivering />}/>
    <Route path = "/PedidoDeliveredWeiter" element = {< OrdenesDeliveredWeiter />}/>
    <Route path = "/PedidoDeliveringWeiter" element = {< OrdenesDeliveringWeiter />}/>
    <Route path = "/ProductosAdm" element = {< ProductsOfAdministrador />}/>
    <Route path = "/RegisterProducts" element = {< RegisterProductos />}/>
    </Routes>
  </Router>
  
)
}

export default App
