import { Link, Outlet } from "react-router-dom";
import styles from "../StyleSheets/Login.module.css";
import stylesRegister from "../StyleSheets/Register.module.css";
export default function ViewRegister() {
  return (
    <div>
      <div className={stylesRegister.fondoRegister}>
        <div className={styles.contenedorLogin}>
          <h1 className={styles.title}>B. Q.</h1>
          <form className={styles.formLogin}>
            EMAIL
            <input className={styles.inputData} type="email" />
            CONTRASEÑA
            <input className={styles.inputData} type="password" />
            ROL
            <select className={styles.inputData}>
              <optgroup  label="Roles">
                <option value="Mesero">Mesero</option>
                <option value="Jefe de cocina">Jefe de cocina</option>
                <option value="Administrador">Administrador</option>
              </optgroup>
            </select>
            <div className={styles.contentButton}>
              <button className={stylesRegister.registerButton}>
                <Link to={"/Weiter"}>REGISTRARME</Link>
                <Outlet />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
