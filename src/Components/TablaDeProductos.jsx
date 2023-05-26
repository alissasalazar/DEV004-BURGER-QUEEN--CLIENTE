import stylesComponents from "../StyleSheets/Components.module.css";
import { useState, useEffect } from "react";
import TablaRegistroDePedido from "./TablaRegistroDePedido";
import getProductRequest from "./getProductsRequest";
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

    const productosDesayuno = await getProductRequest("Desayuno")
    setDesayunoMenu(productosDesayuno);

    const productoAlmuerzo = await getProductRequest("Almuerzo")
    setAlmuerzoMenu(productoAlmuerzo);
  };

  useEffect(() => {
    getProducts()
  }, []);

  return (
    <div>
      <div className={stylesComponents.contenedorProductos}>
        <div className={stylesComponents.contenedorMenu}>
          <p className={stylesComponents.tituloMenu}>Desayuno</p>
          {desayunoMenu
            ? desayunoMenu.map((product) => (
                <div className={stylesComponents.producto} key={product.id}>
                  <div>{product.name}</div>
                  <img
                    className={stylesComponents.imgProducto}
                    src={product.image}
                    alt={product.name}
                  ></img>
                  <div>
                    S/.{product.price}
                    <button
                      className={stylesComponents.buttonAgregar}
                      onClick={() => agregarProducto(product)}
                    >
                      AGREGAR
                    </button>
                  </div>
                </div>
              ))
            : "No se registraron desayunos"}
        </div>
        <div className={stylesComponents.contenedorMenu}>
          <p className={stylesComponents.tituloMenu}>Almuerzo</p>
          {almuerzoMenu
            ? almuerzoMenu.map((product) => (
                <div className={stylesComponents.producto} key={product.id}>
                  <div key={product.id}>{product.name}</div>
                  <img
                    className={stylesComponents.imgProducto}
                    src={product.image}
                    alt={product.name}
                  ></img>
                  <div>
                    S/.{product.price}
                    <button
                      className={stylesComponents.buttonAgregar}
                      onClick={() => agregarProducto(product)}
                    >
                      AGREGAR
                    </button>
                  </div>
                </div>
              ))
            : "No se registraron Almuerzos"}
        </div>
        <TablaRegistroDePedido
          productosSeleccionados={productosSeleccionados}
          seleccionProductosFinal={setProductosSeleccionados}
        />
      </div>
    </div>
  );
}
