// import { getCookie } from "../Components/Cookies";

export async function getUsers(body) {
  const response = await fetch("http://localhost:8080/users", {
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

// export async function upDateUsers(id, body){
  
//   const getCookieResult = getCookie("token");

//   const response = await fetch("http://localhost:8080/users/" + id , {
//     crossDomain: true,
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${getCookieResult}`
//     },
//     body: JSON.stringify(body),
//   });
//   const answer = await response.json();
//   return answer
// }