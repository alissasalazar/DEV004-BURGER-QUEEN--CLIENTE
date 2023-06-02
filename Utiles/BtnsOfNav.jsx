/* eslint-disable react/prop-types */
import { Link, Outlet } from "react-router-dom";
import styles from "../src/StyleSheets/Login.module.css"
export default function BtnsOfNav({ ruta, nombre, className }) {
  return (
    <div>
      <Link to={ruta} className={styles.a}>
        <button className={className} type="button">
          {nombre}
        </button>
      </Link>
      <Outlet />
    </div>
  );
}
{/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
<form className="container-fluid justify-content-start">
  <BtnsOfNav ruta ={} nombre ={} className={}/>
  <BtnsOfNav ruta ={} nombre ={} className={}/>
  <BtnsOfNav ruta ={} nombre ={} className={}/>
  </form>
</nav> */}