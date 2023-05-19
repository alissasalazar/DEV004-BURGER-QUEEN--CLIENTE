import styles from "../StyleSheets/Login.module.css";
import FormLogin from "../Components/FormLogin";

export default function ViewLogin() {
  return (
    <div>
      <div className={styles.fondoLogin}>
        <div className={styles.imgLogin}></div>
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
