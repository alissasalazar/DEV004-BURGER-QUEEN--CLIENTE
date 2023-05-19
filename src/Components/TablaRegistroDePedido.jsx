import stylePedido from "../StyleSheets/RegisterPedido.module.css";
// import { Link, Outlet } from "react-router-dom";
import stylesComponents from "../StyleSheets/Components.module.css";
import {
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
  AiFillDelete,
} from "react-icons/ai";
import { useState, useEffect } from "react";
import { getCookie } from "./Cookies";
import { useNavigate } from "react-router-dom";
import time from "./hora";

export default function TablaRegistroDePedido({
  // eslint-disable-next-line react/prop-types
  productosSeleccionados,
  // eslint-disable-next-line react/prop-types
  seleccionProductosFinal,
}) {
  const getCookieResult = getCookie("token");
  const getCookieId = getCookie("id");
  const navigate = useNavigate();
  const [precioTotal, setTotalPrecio] = useState(0);
  const [nombre, setNombre] = useState("");

  useEffect(() => {
    let suma = 0;
    // eslint-disable-next-line react/prop-types
    productosSeleccionados.map((producto) => {
      // parseFloat analiza un valor como una cadena y devuelve el primer número
      const subTotal = parseFloat(producto.price) * producto.qty;
      suma += subTotal;
    });
    setTotalPrecio(suma);
  }, [productosSeleccionados]);

  const envioDePedido = async () => {
    // eslint-disable-next-line react/prop-types
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
      // eslint-disable-next-line react/prop-types
      userId: getCookieId,
      client: nombre,
      // eslint-disable-next-line react/prop-types
      products: arrayProductos,
      status: "pending",
      dataEntry: time(),
    };
    console.log("que es pedidoObject", pedidoObject);
    const response = await fetch("http://localhost:8080/orders", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${getCookieResult}`,
      },
      body: JSON.stringify(pedidoObject),
    });
    const answer = await response.json();
    console.log("que te da answer en tabla registro", answer);
    navigate("/Weiter");
  };
  const incrementarCantidad = (id) => {
    // eslint-disable-next-line react/prop-types
    const incrementar = productosSeleccionados.map((producto) => {
      if (producto.id === id) {
        return { ...producto, qty: producto.qty + 1 };
      }
      return producto;
    });
    seleccionProductosFinal(incrementar);
  };

  const decrementarCantidad = (id) => {
    // eslint-disable-next-line react/prop-types
    const decrementar = productosSeleccionados.map((producto) => {
      if (producto.id === id && producto.qty > 1) {
        return { ...producto, qty: producto.qty - 1 };
      }
      return producto;
    });
    seleccionProductosFinal(decrementar);
  };

  const borrarProducto = (id) => {
    // eslint-disable-next-line react/prop-types
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
          {
            // eslint-disable-next-line react/prop-types
            productosSeleccionados.map((producto) => {
              return (
                <div key={producto.id} className={stylePedido.cantidadOrden}>
                  {producto.name}
                  <div onClick={() => decrementarCantidad(producto.id)}>
                    <AiOutlineMinusCircle
                      className={stylePedido.registerIcono}
                    />
                  </div>
                  {producto.qty}
                  <div onClick={() => incrementarCantidad(producto.id)}>
                    <AiOutlinePlusCircle
                      className={stylePedido.registerIcono}
                    />
                  </div>
                  <div onClick={() => borrarProducto(producto.id)}>
                    <AiFillDelete className={stylePedido.registerIcono} />{" "}
                  </div>
                </div>
              );
            })
          }
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
