
import styles from "../StyleSheets/Login.module.css";
import stylesComponents from "../StyleSheets/Components.module.css";
import TablaDeProductos from "../Components/TablaDeProductos";
import stylePedido from "../StyleSheets/RegisterPedido.module.css";

export default function RegisterPedido() {

  return (
    <div className={stylesComponents.contenedorPedidos}>
      <h1 className={stylesComponents.tituloView}>NUEVO PEDIDO</h1>
      <div className={styles.contentButton}>
        <div className={stylePedido.contenedorRegistrarPedido}>
          <TablaDeProductos></TablaDeProductos>
        </div>
      </div>
    </div>
  );
}
