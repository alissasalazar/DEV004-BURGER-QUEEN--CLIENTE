export function getCookie(name){
    // buscamos el valor del token 
    console.log("que me da getcookie1")
    const value = `; ${document.cookie}`
    console.log("que me da getcookie1",value)
    // con el metodo split le indicamos que divida a parts desde ; token =
    const parts = value.split(`; ${name}=`)
    console.log("que me da getcookie2",parts)
    if (parts.length === 2) return parts.pop().split(';').shift();
}

