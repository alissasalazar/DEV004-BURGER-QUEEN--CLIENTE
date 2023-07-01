import stylesComponents from "../../../../src/StyleSheets/Components.module.css";
import TablaDeProductos from "./TablaDeProductos";
import NavLogOut from "../../../../Utiles/NavLogOut";

export default function RegisterPedido() {
  return (
    <div className={stylesComponents.contenedorPedidos}>
      <NavLogOut />
      <h1 className={stylesComponents.tituloView}>NUEVO PEDIDO</h1>
      <TablaDeProductos></TablaDeProductos>
    </div>
  );
}
