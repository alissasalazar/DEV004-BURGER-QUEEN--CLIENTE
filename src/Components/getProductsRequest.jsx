import { url } from "../../services/peticiones";
import { getCookie } from "./Cookies";


export default async function getProductRequest(typeProduct) {
  const getCookieResult = getCookie("token");

  const response = await fetch(`${url}/products`, {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${getCookieResult}`,
    },
  });
  const answer = await response.json();
  const gettingUsers = await answer.filter((product) => {
    return product.type === typeProduct;
  });
  return gettingUsers;
}

