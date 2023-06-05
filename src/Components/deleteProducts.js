import { url } from "../../services/peticiones";
import { getCookie } from "./Cookies";

const deleteProduct = async (id) => {
  const getCookieResult = getCookie("token");
  const response = await fetch(`${url}/products/` + id, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${getCookieResult}`,
    },
  });
  const answer = await response.json();
  console.log("que me da answer en canceled", answer);
};
export default deleteProduct;
