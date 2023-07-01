/* eslint-disable react/prop-types */
import stylesComponents from "../src/StyleSheets/Components.module.css";
export default function Productos({
  typeOfProduct,
  nameOfProduct,
  nameBtn,
  funcion,
}) {
  return (
    <div className={stylesComponents.contenedorMenu}>
      <p className={stylesComponents.tituloMenu}>{nameOfProduct}</p>
      {typeOfProduct
        ? typeOfProduct.map((product) => (
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
                  onClick={() => funcion(product)}
                >
                  {nameBtn}
                </button>
              </div>
            </div>
          ))
        : "No se registraron desayunos"}
    </div>
  );
}
