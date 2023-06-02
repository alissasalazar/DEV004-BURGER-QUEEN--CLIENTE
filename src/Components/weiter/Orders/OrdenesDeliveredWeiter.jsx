import stylesComponents from "../../../../src/StyleSheets/Components.module.css"
import { useEffect, useState } from "react";
import styles from "../../../../src/StyleSheets/Login.module.css";
import getOrdersRequest from "../../getOrdersRequest";
import BtnsOfNav from "../../../../Utiles/BtnsOfNav";
import Orders from "../../../../Utiles/Ordenes";

// eslint-disable-next-line react/prop-types
export default function OrdenesDeliveredWeiter() {
  const [deliveredOrders, setdeliveredOrders] = useState([]);

  const getDeliveredOrders = async () => {
    const response = await getOrdersRequest("delivered");
    return setdeliveredOrders(response);
  };

  useEffect(() => {
    getDeliveredOrders();
  }, []);

  return (
    <div className={stylesComponents.contenedorPedidos}>
      <h1 className={stylesComponents.tituloView}>PEDIDOS</h1>
      <div className={styles.contentButton}>
      <BtnsOfNav
          ruta={"/RegisterPedido"}
          nombre={"NUEVO PEDIDO"}
          className={"btn btn-outline-dark btn-lg"}
        />
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <form className="container-fluid justify-content-start">
            <BtnsOfNav
              ruta={"/Weiter"}
              nombre={"Ordenes Pendientes"}
              className={"btn btn-success me-3"}
            />
            <BtnsOfNav
              ruta={"/PedidoDeliveringWeiter"}
              nombre={"Ordenes por Entregar"}
              className={"btn btn-warning me-3"}
            />
            <BtnsOfNav
              ruta={"/PedidoDeliveredWeiter"}
              nombre={"Ordenes Entregadas"}
              className={"btn btn-info"}
            />
          </form>
        </nav>
        <div>
          <Orders
            nameStatusOrder={"Ordenes entregadas"}
            arrOrder={deliveredOrders}
          />
        </div>
      </div>
    </div>
  );
}
