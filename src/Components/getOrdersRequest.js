import { getCookie } from "./Cookies";

export default async function getOrdersRequest(stateOrden) {
  const getCookieResult = getCookie("token");

  const response = await fetch("http://localhost:8080/orders", {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${getCookieResult}`,
    },
  });
  const answer = await response.json();
  const gettingOrders = await answer.filter((order) => {
    return order.status === stateOrden;
  });
  return gettingOrders;
}
