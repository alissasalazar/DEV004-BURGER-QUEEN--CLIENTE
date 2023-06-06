import stylesComponents from "../../../../src/StyleSheets/Components.module.css";
import { useState, useEffect } from "react";
import TablaRegistroDePedido from "./TablaRegistroDePedido";
import { getProductRequest } from "../../../../services/peticiones";
import Productos from "../../../../Utiles/Productos";

export default function TablaDeProductos() {
  const [desayunoMenu, setDesayunoMenu] = useState([]);
  const [almuerzoMenu, setAlmuerzoMenu] = useState([]);
  const [productosSeleccionados, setProductosSeleccionados] = useState([]);

  const agregarProducto = (producto) => {
    const matchId = productosSeleccionados.find(
      (elementoProduct) => elementoProduct.id === producto.id
    );
    const cantidadProductos = { qty: 1, ...producto };
    // Se agregaran productos que no tengan el mismo id
    if (!matchId) {
      setProductosSeleccionados((preEstado) => [
        ...preEstado,
        cantidadProductos,
      ]);
    }
  };
  const getProducts = async () => {
    const productosDesayuno = await getProductRequest("Desayuno");
    setDesayunoMenu(productosDesayuno);

    const productoAlmuerzo = await getProductRequest("Almuerzo");
    setAlmuerzoMenu(productoAlmuerzo);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div className={stylesComponents.contenedorProductos}>
        <div className={stylesComponents.contenedorMenu}>
        <Productos 
        typeOfProduct={desayunoMenu}
        nameOfProduct={"Desayuno"}
        nameBtn={"AGREGAR"}
        funcion ={agregarProducto}
        />
        </div>
        <div className={stylesComponents.contenedorMenu}>
        <Productos 
        typeOfProduct={almuerzoMenu}
        nameOfProduct={"Almuerzo"}
        nameBtn={"AGREGAR"}
        funcion ={agregarProducto}
        />
        </div>
        <TablaRegistroDePedido
          productosSeleccionados={productosSeleccionados}
          seleccionProductosFinal={setProductosSeleccionados}
        />
      </div>
    </div>
  );
}
