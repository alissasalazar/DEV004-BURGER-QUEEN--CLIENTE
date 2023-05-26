import { Link, Outlet } from "react-router-dom";
import styles from "../StyleSheets/Login.module.css";
export default function BarraBtnsOrdenesWeiter() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <form className="container-fluid justify-content-start">
          <Link to={"/Weiter"} className={styles.a}>
            <button className="btn btn-success me-3" type="button">
              Ordenes Pendientes
            </button>
          </Link>
          <Outlet />
          <Link to={"/PedidoDeliveringWeiter"} className={styles.a}>
            <button type="button" className="btn btn-warning me-3">
              Ordenes por Entregar
            </button>
          </Link>
          <Outlet />
          <Link to={"/PedidoDeliveredWeiter"} className={styles.a}>
            <button type="button" className="btn btn-info">
              Ordenes Entregadas
            </button>
          </Link>
          <Outlet />
        </form>
      </nav>
    </div>
  );
}
