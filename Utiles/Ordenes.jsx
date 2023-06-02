/* eslint-disable react/prop-types */
import stylesComponents from "../src/StyleSheets/Components.module.css"
import { checkOrderToDelivered, deleteFetch } from "../services/peticiones";
export default function Orders({nameStatusOrder,arrOrder,funcion1,nameBtn}) {
  return (
    <div>
      <p className={stylesComponents.tituloEstadoPedido}>{nameStatusOrder}</p>
      <div className={stylesComponents.contenedorOrdenes}>
        {arrOrder.map((order) => {
          return (
            <div key={order.id} className={stylesComponents.contenedorOrden}>
              <div className={stylesComponents.tituloDeOrden}>
                <div>{order.id}</div>
                <div>{order.client}</div>
              </div>
              <div className={stylesComponents.orden}>
                {order.products.map((producto) => {
                  return (
                    <div
                      key={producto.product.id}
                      className={stylesComponents.cantidadOrden}
                    >
                      <div>
                        {producto.qty} - {producto.product.name}
                      </div>
                    </div>
                  );
                })}
              </div>
              <button
                className={stylesComponents.ordenIcono}
                onClick={() => {
                  if(nameBtn==="Cancelar Orden"){
                    deleteFetch("orders",order.id)
                    funcion1
                  } else if(nameBtn === "Orden Entregada"){
                    checkOrderToDelivered(order.id,"delivered")
                  }
                }}
              >
                {nameBtn}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
