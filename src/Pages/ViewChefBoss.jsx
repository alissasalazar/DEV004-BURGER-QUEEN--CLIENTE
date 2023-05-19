// import styles from "../StyleSheets/Login.module.css";
import stylesComponents from "../StyleSheets/Components.module.css";
import { useEffect, useState } from "react";
import checkOrderToDelivering from "../Components/checkOrderToDelivery";
import BarraBtnsOrdenesChef from "../Components/BarraBtnsOrdenesChef";
import getOrdersRequest from "../Components/getOrdersRequest";

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
      <BarraBtnsOrdenesChef></BarraBtnsOrdenesChef>
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
                        key={producto.id}
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
