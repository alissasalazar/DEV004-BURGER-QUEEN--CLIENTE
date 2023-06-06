import { getCookie } from "../src/Components/Cookies";
import time from "../src/Components/hora";
// export const url = "http://localhost:8080";
export const url = "https://burger-queen-api-mock-production-f90c.up.railway.app";

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

export async function checkOrderToStatus(id,status){
  const response = await fetch(`${url}/orders/` + id, {
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

export const checkOrderToDelivering = async (id) => {
  const getCookieResult = getCookie("token");
  const response = await fetch(`${url}/orders/` + id, {
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

export  async function getOrdersRequest(stateOrden) {
  const getCookieResult = getCookie("token");

  const response = await fetch(`${url}/orders`, {
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

export async function getProductRequest(typeProduct) {
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

export async function getUsersRequest(roleUser) {
  const getCookieResult = getCookie("token");
  console.log("que me da el get en users",getCookieResult )
  const response = await fetch(`${url}/users`, {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${getCookieResult}`,
    },
  });
  const answer = await response.json();
  const gettingUsers = await answer.filter((user) => {
    return user.role === roleUser;
  });
  return gettingUsers;
}

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

export async function getUsers(body) {
  const response = await fetch(`${url}/users`, {
    crossDomain: true,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const answer = await response.json();
  return answer
}