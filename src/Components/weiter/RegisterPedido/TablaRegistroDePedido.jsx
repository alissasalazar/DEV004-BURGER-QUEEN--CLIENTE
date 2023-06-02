/* eslint-disable react/prop-types */
import stylePedido from "../../../../src/StyleSheets/RegisterPedido.module.css";
// import { Link, Outlet } from "react-router-dom";
import stylesComponents from "../../../../src/StyleSheets/Components.module.css";
import {
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
  AiFillDelete,
} from "react-icons/ai";
import { useState, useEffect } from "react";
import { getCookie } from "../../Cookies";
import { useNavigate } from "react-router-dom";
import time from "../../hora";
import { fetchPedido } from "../../../../services/peticiones";

export default function TablaRegistroDePedido({
  productosSeleccionados,
  seleccionProductosFinal,
}) {
  const getCookieId = getCookie("id");
  const navigate = useNavigate();
  const [precioTotal, setTotalPrecio] = useState(0);
  const [nombre, setNombre] = useState("");

  useEffect(() => {
    let suma = 0;
    productosSeleccionados.map((producto) => {
      // parseFloat analiza un valor como una cadena y devuelve el primer número
      const subTotal = parseFloat(producto.price) * producto.qty;
      suma += subTotal;
    });
    setTotalPrecio(suma);
  }, [productosSeleccionados]);

  const envioDePedido = async () => {
    const arrayProductos = productosSeleccionados.map((e) => {
      return {
        qty: e.qty,
        product: {
          id: e.id,
          name: e.name,
          price: e.price,
          image: e.image,
          type: e.type,
          dateEntry: e.dateEntry,
        },
      };
    });

    const pedidoObject = {
      userId: getCookieId,
      client: nombre,
      products: arrayProductos,
      status: "pending",
      dataEntry: time(),
    };
    console.log("que es pedidoObject", pedidoObject);
    await fetchPedido(pedidoObject);
    navigate("/Weiter");
  };

  const incrementarCantidad = (id) => {
    const incrementar = productosSeleccionados.map((producto) => {
      if (producto.id === id) {
        return { ...producto, qty: producto.qty + 1 };
      }
      return producto;
    });
    seleccionProductosFinal(incrementar);
  };

  const decrementarCantidad = (id) => {
    const decrementar = productosSeleccionados.map((producto) => {
      if (producto.id === id && producto.qty > 1) {
        return { ...producto, qty: producto.qty - 1 };
      }
      return producto;
    });
    seleccionProductosFinal(decrementar);
  };

  const borrarProducto = (id) => {
    const borrar = productosSeleccionados.filter((producto) => {
      if (producto.id !== id) {
        return producto;
      }
    });
    seleccionProductosFinal(borrar);
  };

  return (
    <div>
      <div className={stylePedido.contenedorRegistroOrden}>
        <div className={stylesComponents.tituloMenu}>ORDEN</div>
        <div>
          <input
            className={stylePedido.inputNombre}
            onChange={(e) => {
              setNombre(e.target.value);
            }}
            placeholder="Ingresar nombre de cliente"
          ></input>
        </div>
        <div>
          {productosSeleccionados.map((producto) => {
            return (
              <div key={producto.id} className={stylePedido.cantidadOrden}>
                {producto.name}
                <div onClick={() => decrementarCantidad(producto.id)}>
                  <AiOutlineMinusCircle className={stylePedido.registerIcono} />
                </div>
                {producto.qty}
                <div onClick={() => incrementarCantidad(producto.id)}>
                  <AiOutlinePlusCircle className={stylePedido.registerIcono} />
                </div>
                <div onClick={() => borrarProducto(producto.id)}>
                  <AiFillDelete className={stylePedido.registerIcono} />{" "}
                </div>
              </div>
            );
          })}
        </div>
        <div>TOTAL: {"S/." + precioTotal}</div>
        <button
          onClick={() => envioDePedido()}
          className={stylesComponents.buttonAgregar}
        >
          Enviar a cocina
        </button>
      </div>
    </div>
  );
}
