import { Link, Outlet } from "react-router-dom";
import styles from "../StyleSheets/Login.module.css";
import stylesComponents from "../StyleSheets/Components.module.css";
import OrdenesPendingWeiter from "../Components/OrdenesPendingWeiter";
import BarraBtnsOrdenesWeiter from "../Components/BarraBtnsOrdenesWeiter";

export default function ViewWeiter() {
  return (
    <div className={stylesComponents.contenedorPedidos}>
      <h1 className={stylesComponents.tituloView}>PEDIDOS</h1>
      <div className={styles.contentButton}>
        <button className={styles.secondButton}>
          <Link to={"/RegisterPedido"}>NUEVO PEDIDO</Link>
          <Outlet />
        </button>
        <BarraBtnsOrdenesWeiter></BarraBtnsOrdenesWeiter>
        <OrdenesPendingWeiter></OrdenesPendingWeiter>
      </div>
    </div>
  );
}
