export default function time () {
    const hora = new Date();
    console.log("que hora es", hora);

    const fechaDelivering = hora.toISOString().slice(0, 10);
    console.log("fecha", fechaDelivering);

    const horaDelivering = hora.toString().slice(15, 25);
    console.log("hora", horaDelivering);

    const horaFin = fechaDelivering + horaDelivering;
    
    return horaFin
}