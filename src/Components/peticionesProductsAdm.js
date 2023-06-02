import { url } from "../../services/peticiones";
import { getCookie } from "../Components/Cookies";

export async function getProduct(body) {
  const getCookieResult = getCookie("token");
  console.log("que me da cookies",getCookieResult )
  const response = await fetch(`${url}/products`, {
    crossDomain: true,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookieResult}`,
    },
    body: JSON.stringify(body),
  });
  const answer = await response.json();
  return answer;
}

export async function upDateProduct(id, body) {
  const getCookieResult = getCookie("token");

  const response = await fetch(`${url}/products` + id, {
    crossDomain: true,
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookieResult}`,
    },
    body: JSON.stringify(body),
  });
  const answer = await response.json();
  return answer;
}
