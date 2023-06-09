import stylesComponents from "../../StyleSheets/Components.module.css";
import { useEffect, useState } from "react";
import BtnsOfNav from "../../../Utiles/BtnsOfNav";
import { getOrdersRequest } from "../../../services/peticiones";
import NavLogOut from "../../../Utiles/NavLogOut";

// eslint-disable-next-line react/prop-types
export default function OrdenesDelivering() {
  const [deliveringOrders, setDeliveringOrders] = useState([]);

  const getDeliveringOrders = async () => {
    const response = await getOrdersRequest("delivering");
    return setDeliveringOrders(response);
  };

  useEffect(() => {
    getDeliveringOrders();
  }, []);

  const diferenciaHora = deliveringOrders.map((order) => {
    let horaInicial = new Date(order.dataEntry);
    let horaFinal = new Date(order.dateProcessed);
    let diff = horaFinal.getTime() - horaInicial.getTime();
    let diffMin = diff / (1000 * 60);
    let diffMinCorto = diffMin.toString().slice(0, 2);
    console.log("me da los minutos cortos", diffMinCorto);
    return {
      ordenId: order.id,
      diffTime: diffMinCorto,
    };
  });

  return (
    <div>
      <NavLogOut />
      <div className={stylesComponents.tituloViewWelcome}>
        !Bienvenido Chefcit@!
      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <form className="container-fluid justify-content-start">
          <BtnsOfNav
            ruta={"/ChefBoss"}
            nombre={" Ordenes Pendientes"}
            className={"btn btn-success me-2"}
          />
          <BtnsOfNav
            ruta={"/PedidoDelivering"}
            nombre={"Ordenes Listas"}
            className={"btn btn-warning"}
          />
        </form>
      </nav>
      <p className={stylesComponents.tituloEstadoPedido}>Órdenes Listas</p>
      <div className={stylesComponents.contenedorOrdenes}>
        {deliveringOrders.map((order) => {
          return (
            <div key={order.id}>
              <div className={stylesComponents.contenedorOrden}>
                <div className={stylesComponents.tituloDeOrden}>
                  {diferenciaHora.map((horas) => {
                    if (order.id === horas.ordenId) {
                      return (
                        <div
                          key={horas.ordenId}
                          className={stylesComponents.tituloEstadoPedido}
                        >
                          Hecho en {horas.diffTime} mnts
                        </div>
                      );
                    }
                  })}
                  <div>{order.id}</div>
                  <div>{order.client}</div>
                </div>
                <div className={stylesComponents.orden}>
                  {order.products.map((producto) => {
                    return (
                      <div key={producto.product.id}>
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
  );
}
