import stylesComponents from "../StyleSheets/Components.module.css";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "../StyleSheets/Login.module.css";
import BarraBtnsOrdenesWeiter from "../Components/BarraBtnsOrdenesWeiter";
import getOrdersRequest from "./getOrdersRequest";

// eslint-disable-next-line react/prop-types
export default function OrdenesDeliveredWeiter() {
  const [deliveredOrders, setdeliveredOrders] = useState([]);

  const getDeliveredOrders = async () => {
    const response = await getOrdersRequest("delivered");
    return setdeliveredOrders(response);
  };

  useEffect(() => {
    getDeliveredOrders(); 
  },[]);

  return (
    <div className={stylesComponents.contenedorPedidos}>
      <h1 className={stylesComponents.tituloView}>PEDIDOS</h1>
      <div className={styles.contentButton}>
        <button className={styles.secondButton}>
          <Link to={"/RegisterPedido"}>NUEVO PEDIDO</Link>
          <Outlet />
        </button>
        <BarraBtnsOrdenesWeiter></BarraBtnsOrdenesWeiter>
        <div>
          <p className={stylesComponents.tituloEstadoPedido}>Órdenes Listas</p>
          <div className={stylesComponents.contenedorOrdenes}>
            {deliveredOrders.map((order) => {
              return (
                <div key={order.id}>
                  <div className={stylesComponents.contenedorOrden}>
                    <div className={stylesComponents.tituloDeOrden}>
                      <div>{order.id}</div>
                      <div>{order.client}</div>
                    </div>
                    <div className={stylesComponents.orden}>
                      {order.products.map((producto) => {
                        return (
                          <div key={producto.id}>
                            {producto.qty} - {producto.product.name}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
