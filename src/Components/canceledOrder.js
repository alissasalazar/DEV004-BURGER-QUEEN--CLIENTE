import { getCookie } from "./Cookies";

const canceledOrder = async (id) => {
  const getCookieResult = getCookie("token");
  const response = await fetch("http://localhost:8080/orders/" + id, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${getCookieResult}`,
    },
  });
  const answer = await response.json();
  console.log("que me da answer en canceled", answer);
};
export default canceledOrder;
