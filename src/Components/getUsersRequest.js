import { url } from "../../services/peticiones";
import { getCookie } from "./Cookies";

export default async function getUsersRequest(roleUser) {
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
