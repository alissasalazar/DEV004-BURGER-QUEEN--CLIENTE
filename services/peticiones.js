import { getCookie } from "../src/Components/Cookies";
// export const url = "http://localhost:8080";
export const url = "burger-queen-api-mock-production-6037.up.railway.app";

const getCookieResult = getCookie("token");

export async function fetchLogin(email, password) {
  try {
    const response = await fetch(`${url}/login`, {
      crossDomain: true,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const answer = await response.json();
    console.log("que da answer peticiones", answer);
    return answer
  } catch(error){
    console.log("que me da error", error)
  }
}

export async function deleteFetch(object,id){
  const response = await fetch(`${url}/${object}/`+ id, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${getCookieResult}`,
    },
  });
  const answer = await response.json();
  console.log("que me da answer en canceled", answer);
}

export async function checkOrderToDelivered(id,status){
  const response = await fetch(`${url}/orders` + id, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${getCookieResult}`,
    },
    body: JSON.stringify({ status: status }),
  });
  const answer = await response.json();
  console.log("que me da answer en delivering", answer);
}

export async function fetchPedido(object){
  const response = await fetch(`${url}/orders`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${getCookieResult}`,
    },
    body: JSON.stringify(object),
  });
  // eslint-disable-next-line no-unused-vars
  const answer = await response.json();
}