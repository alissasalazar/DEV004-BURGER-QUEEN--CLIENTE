// import styles from "../StyleSheets/Login.module.css";
import stylesComponents from "../StyleSheets/Components.module.css";
import { useEffect, useState } from "react";
import checkOrderToDelivering from "../Components/checkOrderToDelivery";
import getOrdersRequest from "../Components/getOrdersRequest";
import BtnsOfNav from "../../Utiles/BtnsOfNav";

export default function ViewChefBoss() {
  const [pendingOrders, setPendingOrders] = useState([]);

  const getPendingOrders = () =>
    getOrdersRequest("pending").then((json) => {
      return setPendingOrders(json);
    });

  useEffect(() => {
    getPendingOrders();
  }, []);

  return (
    <div>
      <div className={stylesComponents.tituloViewWelcome}>
        !Bienvenido Chefcit@!
      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <form className="container-fluid justify-content-start">
          <BtnsOfNav
            ruta={"/ChefBoss"}
            nombre={"Ordenes Pendientes"}
            className={"btn btn-success me-2"}
          />
          <BtnsOfNav
            ruta={"/PedidoDelivering"}
            nombre={" Ordenes Listas"}
            className={"btn btn-warning"}
          />
        </form>
      </nav>
      <div>
        <p className={stylesComponents.tituloEstadoPedido}>
          Ordenes Pendientes
        </p>
        <div className={stylesComponents.contenedorOrdenes}>
          {pendingOrders.map((order) => {
            return (
              <div key={order.id} className={stylesComponents.contenedorOrden}>
                <div className={stylesComponents.tituloDeOrden}>
                  <div>{order.id}</div>
                  <div>{order.client}</div>
                </div>
                <div className={stylesComponents.orden}>
                  {order.products.map((producto) => {
                    return (
                      <div
                        key={producto.product.id}
                        className={stylesComponents.cantidadOrden}
                      >
                        <div>
                          {producto.qty} - {producto.product.name}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <button
                  className={stylesComponents.ordenIcono}
                  onClick={() => {
                    checkOrderToDelivering(order.id);
                    getPendingOrders();
                  }}
                >
                  Listo para entregar
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
