import styles from "../StyleSheets/Login.module.css";
import stylesComponents from "../StyleSheets/Components.module.css";
import OrdenesPendingWeiter from "../Components/weiter/Orders/OrdenesPendingWeiter";
import BtnsOfNav from "../../Utiles/BtnsOfNav";
import NavLogOut from "../../Utiles/NavLogOut";

export default function ViewWeiter() {
  return (
    <div className={stylesComponents.contenedorPedidos}>
      <NavLogOut />
      <h1 className={stylesComponents.tituloView}>PEDIDOS</h1>
      <div className={stylesComponents.linePendiente}>Pendientes</div>
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
        <OrdenesPendingWeiter></OrdenesPendingWeiter>
      </div>
    </div>
  );
}
