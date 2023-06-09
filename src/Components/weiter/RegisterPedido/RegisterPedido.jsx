import styles from "../../../../src/StyleSheets/Login.module.css";
import stylesComponents from "../../../../src/StyleSheets/Components.module.css";
import TablaDeProductos from "./TablaDeProductos";
import stylePedido from "../../../../src/StyleSheets/RegisterPedido.module.css";
import NavLogOut from "../../../../Utiles/NavLogOut";

export default function RegisterPedido() {

  return (
    <div className={stylesComponents.contenedorPedidos}>
      <NavLogOut />
      <h1 className={stylesComponents.tituloView}>NUEVO PEDIDO</h1>
      <div className={styles.contentButton}>
        <div className={stylePedido.contenedorRegistrarPedido}>
          <TablaDeProductos></TablaDeProductos>
        </div>
      </div>
    </div>
  );
}
