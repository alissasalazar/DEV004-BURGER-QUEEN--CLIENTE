import stylesComponents from "../StyleSheets/Components.module.css";
import { useEffect, useState } from "react";
import getOrdersRequest from "./getOrdersRequest";
import canceledOrder from "./canceledOrder";

export default function OrdenesPendingWeiter() {
  const [pendingOrders, setPendingOrders] = useState([]);

  const getDeliveringOrders = async () => {
    const response = await getOrdersRequest("pending");
    return setPendingOrders(response);
  };

  useEffect(() => {
    getDeliveringOrders();
  }, []);

  return (
    <div>
      <p className={stylesComponents.tituloEstadoPedido}>Ordenes Pendientes</p>
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
                  canceledOrder(order.id);
                  getDeliveringOrders();
                }}
              >
                Cancelar orden
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
