export default function peticionFetch (route,method,accessToken, body) {
let response = fetch (`http://localhost:8080/${route}`,{
    method: method,
    headers:{
        "content-type": "application/json",
        "authorization": "Bearer " + accessToken ,
    },
    body:JSON.stringify(body)
}).then((result) => {result.json()})
return response 
}