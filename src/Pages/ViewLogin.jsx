import styles from "../StyleSheets/Login.module.css";
import FormLogin from "../Components/FormLogin";
import hamburger from "../images/hamburguer-logo.jpg"

export default function ViewLogin() {
  return (
    <div>
      <div className={styles.fondoLogin}>
        <img className={styles.imgLogin} src= {hamburger} />
        <div className={styles.contenedorLogin}>
          <h1 className={styles.title}>BURGER QUEEN</h1>
          <section>
            <FormLogin />
          </section>
        </div>
      </div>
    </div>
  );
}
