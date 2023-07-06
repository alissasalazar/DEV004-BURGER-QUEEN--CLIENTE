import stylesComponents from "../../../StyleSheets/Components.module.css";
import { useState, useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import UpDateProducts from "./editProductos";
import BtnsOfNav from "../../../../Utiles/BtnsOfNav";
import {
  deleteFetch,
  getProductRequest,
} from "../../../../services/peticiones";
import NavLogOut from "../../../../Utiles/NavLogOut";

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
  }, [desayunoMenu, almuerzoMenu]);

  return (
    <div className={stylesComponents.contenedorPedidos}>
      <NavLogOut />
      <div className={stylesComponents.tituloView}>
        Bienvenido Administrad@r
      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <form className="container-fluid justify-content-start">
          <BtnsOfNav
            ruta={"/Administrador"}
            nombre={"Colaboradores"}
            className={"btn btn-success me-2"}
          />
          <BtnsOfNav
            ruta={"/ProductosAdm"}
            nombre={"Productos"}
            className={"btn btn-warning"}
          />
        </form>
      </nav>
      <BtnsOfNav
        ruta={"/RegisterProducts"}
        nombre={"Registrar producto"}
        className={"btn btn-outline-dark btn-lg"}
      />
      <div className={stylesComponents.contenedorProductosAdm}>
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
                    <div>
                      <UpDateProducts id={product.id} product={product} />
                    </div>
                    <AiOutlineDelete
                      onClick={() => {
                        deleteFetch("products", product.id);
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
                    <div>
                      <UpDateProducts id={product.id} product={product} />
                    </div>
                    <AiOutlineDelete
                      onClick={() => {
                        deleteFetch("products", product.id);
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
