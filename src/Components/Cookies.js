export function getCookie(name){
    // buscamos el valor del token 
    const value = `; ${document.cookie}`
    // con el metodo split le indicamos que divida a parts desde ; token =
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) return parts.pop().split(';').shift();
}

