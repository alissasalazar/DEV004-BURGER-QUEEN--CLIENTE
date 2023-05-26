import { Link, Outlet } from "react-router-dom";
import styles from "../StyleSheets/Login.module.css";

export default function BarraBtnsAdministrador() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <form className="container-fluid justify-content-start">
          <Link className={styles.a} to={"/Administrador"}>
            <button className="btn btn-success me-2" type="button">
              Colaboradores
            </button>
          </Link>
          <Outlet />
          <Link className={styles.a} to={"/ProductosAdm"}>
            <button type="button" className="btn btn-warning">
              Productos
            </button>
          </Link>
          <Outlet />
        </form>
      </nav>
    </div>
  );
}
