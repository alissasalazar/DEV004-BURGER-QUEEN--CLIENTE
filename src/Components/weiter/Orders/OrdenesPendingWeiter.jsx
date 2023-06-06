import { useEffect, useState } from "react";
import Orders from "../../../../Utiles/Ordenes";
import { getOrdersRequest } from "../../../../services/peticiones";

export default function OrdenesPendingWeiter() {
  const [pendingOrders, setPendingOrders] = useState([]);

  const getDeliveringOrders = async () => {
    const response = await getOrdersRequest("pending");
    return setPendingOrders(response);
  };

  useEffect(() => {
    getDeliveringOrders();
  }, []);

  return (
    <div>
      <div>
        <Orders
          nameStatusOrder={"Ordenes Pendientes"}
          arrOrder={pendingOrders}
          funcion1={getDeliveringOrders()}
          nameBtn={"Cancelar Orden"}
        />
      </div>
    </div>
  );
}


