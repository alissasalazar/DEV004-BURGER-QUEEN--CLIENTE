import { Link, Outlet } from "react-router-dom";

export default function BarraBtnsOrdenesChef() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <form className="container-fluid justify-content-start">
          <Link to={"/ChefBoss"}>
            <button className="btn btn-success me-2" type="button">
              Ordenes Pendientes
            </button>
          </Link>
          <Outlet />
          <Link to={"/PedidoDelivering"}>
            <button type="button" className="btn btn-warning">
              Ordenes Listas
            </button>
          </Link>
          <Outlet />
        </form>
      </nav>
    </div>
  );
}
