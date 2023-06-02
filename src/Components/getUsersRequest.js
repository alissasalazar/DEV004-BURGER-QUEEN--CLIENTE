import { url } from "../../services/peticiones";
import { getCookie } from "./Cookies";

export default async function getUsersRequest(roleUser) {
  const getCookieResult = getCookie("token");

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
