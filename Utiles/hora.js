export default function time () {
    const hora = new Date();

    const fechaDelivering = hora.toISOString().slice(0, 10);

    const horaDelivering = hora.toString().slice(15, 25);

    const horaFin = fechaDelivering + horaDelivering;
    
    return horaFin
}