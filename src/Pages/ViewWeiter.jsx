import { Link, Outlet } from "react-router-dom";
import styles from "../StyleSheets/Login.module.css";
import stylesComponents from "../StyleSheets/Components.module.css";

export default function ViewWeiter() {
  return (
    <div className={stylesComponents.contenedorPedidos} >
      <h1 className={ stylesComponents.tituloView}>PEDIDOS</h1>
      <div className={styles.contentButton}>
        <button className={styles.secondButton}>
          <Link to={"/Menu"}>NUEVO PEDIDO</Link>
          <Outlet />
        </button>
      </div>
      <div className={stylesComponents.tituloEstadoPedido}>PENDIENTE</div>
        <div className={stylesComponents.pedidosEstado}>
          <div
          className={stylesComponents.pedido}>Pedido</div>
          <div
          className={stylesComponents.pedido}>Pedido</div>
          <div
          className={stylesComponents.pedido}>Pedido</div>
          <div
          className={stylesComponents.pedido}>Pedido</div>
        </div>
        <div className={stylesComponents.tituloEstadoPedido}>ENTREGANDO</div>        
        <div className={stylesComponents.pedidosEstado}>
          <div
          className={stylesComponents.pedido}>Pedido</div>
          <div
          className={stylesComponents.pedido}>Pedido</div>
        </div>
        <div className={stylesComponents.tituloEstadoPedido}>ENTREGADO</div>  
        <div className={stylesComponents.pedidosEstado}>
          <div
          className={stylesComponents.pedido}>Pedido</div>
          <div
          className={stylesComponents.pedido}>Pedido</div>
        </div>
        <div className={stylesComponents.tituloEstadoPedido}>CANCELADO</div>  
        <div className={stylesComponents.pedidosEstado}>
          <div
          className={stylesComponents.pedido}>Pedido</div>
          <div
          className={stylesComponents.pedido}>Pedido</div>
        </div>
    </div>
  );
}
