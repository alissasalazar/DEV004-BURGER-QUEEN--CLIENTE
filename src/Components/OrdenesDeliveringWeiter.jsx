import stylesComponents from "../StyleSheets/Components.module.css";
import { useEffect, useState } from "react";
import getOrdersRequest from "./getOrdersRequest";
import { Link, Outlet } from "react-router-dom";
import styles from "../StyleSheets/Login.module.css";
import BarraBtnsOrdenesWeiter from "../Components/BarraBtnsOrdenesWeiter";
import checkOrderToDelivered from "./checkOrderToDelivered";


export default function OrdenesDeliveringWeiter() {
  const [deliveringOrders, setDeliveringOrders] = useState([]);

  const getDeliveringOrders = async () => {
    const response = await getOrdersRequest("delivering");
    return setDeliveringOrders(response);
  };

  useEffect(() => {
    getDeliveringOrders();
  }, []);

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
            {deliveringOrders.map((order) => {
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
                    <button
                      className={stylesComponents.ordenIcono}
                      onClick={() => {
                        checkOrderToDelivered(order.id);
                        getDeliveringOrders()
                      }}
                    >
                      Orden Entregada
                    </button>
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
