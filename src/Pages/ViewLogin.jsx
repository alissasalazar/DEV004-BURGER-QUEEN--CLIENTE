import { Link, Outlet } from "react-router-dom";
import styles from "../StyleSheets/Login.module.css";

export default function ViewLogin() {
  return (
    <div>
      <div className={styles.fondoLogin}>
        <div className={styles.imgLogin}></div>
        <div className={styles.contenedorLogin}>
          <h1 className={styles.title}>BURGER QUEEN</h1>
          <form className={styles.formLogin}>
            EMAIL
            <input className={styles.inputData} type="email" />
            CONTRASEÑA
            <input className={styles.inputData} type="password" />
            <div className={styles.contentButton}>
              <button className={styles.firstButton}>
                <Link to={"/Weiter"} >INGRESAR</Link>
                <Outlet />
              </button>
              {/* <button className={styles.secondButton}>
                <Link to={"/Register"}>REGISTRAR</Link>
                <Outlet />
              </button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
