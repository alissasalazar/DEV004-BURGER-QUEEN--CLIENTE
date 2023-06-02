import { url } from "../../services/peticiones";
import { getCookie } from "../Components/Cookies";
import time from "../Components/hora";

const checkOrderToDelivering = async (id) => {
  const getCookieResult = getCookie("token");
  const response = await fetch(`${url}/orders` + id, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${getCookieResult}`,
    },
    body: JSON.stringify({ status: "delivering", dateProcessed: time() }),
  });
  const answer = await response.json();
  console.log("que me da answer en chef boss", answer);
};

export default checkOrderToDelivering