import { getCookie } from "../Components/Cookies";
const checkOrderToDelivered = async (id) => {
  const getCookieResult = getCookie("token");
  const response = await fetch("http://localhost:8080/orders/" + id, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${getCookieResult}`,
    },
    body: JSON.stringify({ status: "delivered" }),
  });
  const answer = await response.json();
  console.log("que me da answer en delivering", answer);
};

export default checkOrderToDelivered;
