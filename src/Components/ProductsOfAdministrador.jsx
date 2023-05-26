import stylesComponents from "../StyleSheets/Components.module.css";
import styles from "../StyleSheets/Login.module.css";
import BarraBtnsAdministrador from "../Components/BarraBtnsAdministrador";
import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import getProductRequest from "./getProductsRequest";
import { AiOutlineDelete } from "react-icons/ai";
import deleteProduct from "./deleteProducts";
import UpDateProducts from "./editProductos";

export default function ProductsOfAdministrador() {
  const [desayunoMenu, setDesayunoMenu] = useState([]);
  const [almuerzoMenu, setAlmuerzoMenu] = useState([]);
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
    <div className={stylesComponents.contenedorPedidos}>
      <div className={stylesComponents.tituloView}>
        Bienvenido Administrad@r
      </div>
      <div className={styles.contentButton}>
        <BarraBtnsAdministrador />
      </div>
      <button className={styles.secondButton}>
        <Link className={styles.a} to={"/RegisterProducts"}>
          Registrar producto
        </Link>
        <Outlet />
      </button>
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
                  <div>S/.{product.price} </div>
                  <div>
                    <div
                      onClick={() => {
                        getProducts();
                      }}
                    >
                      <UpDateProducts id={product.id} product={product} />
                    </div>
                    <AiOutlineDelete
                      onClick={() => {
                        deleteProduct(product.id);
                        getProducts();
                      }}
                    />
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
                  <div>S/.{product.price} </div>
                  <div>
                  <div
                      onClick={() => {
                        getProducts();
                      }}
                    >
                      <UpDateProducts id={product.id} product={product} />
                    </div>
                    <AiOutlineDelete
                      onClick={() => {
                        deleteProduct(product.id);
                        getProducts();
                      }}
                    ></AiOutlineDelete>
                  </div>
                </div>
              ))
            : "No se registraron Almuerzos"}
        </div>
      </div>
    </div>
  );
}
