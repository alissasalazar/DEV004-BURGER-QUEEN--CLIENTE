import { getCookie } from "./Cookies";

const canceledUser = async (id) => {
  const getCookieResult = getCookie("token");
  const response = await fetch("http://localhost:8080/users/" + id, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${getCookieResult}`,
    },
  });
  const answer = await response.json();
  console.log("que me da answer en canceled", answer);
};
export default canceledUser;
