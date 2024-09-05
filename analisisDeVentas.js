/*
Ejercicio 2: Análisis de Ventas de una Tienda:
Descripción: Supongamos que tienes un array de objetos que representan las ventas diarias
de una tienda durante un mes. Cada objeto contiene la fecha y el monto de la venta.
Crea una función que realice las siguientes tareas:

Calcular el total de ventas del mes.
Encontrar el día con la mayor venta.
Calcular el promedio de ventas diarias.
*/

const analizarVentas = (ventas) =>{
    const cantidad = ventas.length
    const totalVentas = ventas.reduce((total, venta) => total + venta.monto,0)
    const promedioDiario = totalVentas/cantidad
    const  montoMayorVenta = ventas.reduce((a,venta)=>{
        return Math.max(a,venta.monto)
    }, -Infinity )

    const diaMayorVenta = ventas.filter((venta)=> venta.monto === montoMayorVenta)

    return {
        totalVentas,
        diaMayorVenta,
        promedioDiario
    }
}

const ventas = [
    { fecha: "2024-04-01", monto: 1500 },
    { fecha: "2024-04-02", monto: 2300 },
    { fecha: "2024-04-30", monto: 1750 }
  ];

  const analisis = analizarVentas(ventas)

  console.log(analisis)
  // Output:
// {
//   totalVentas: 45000,
//   diaMayorVenta: { fecha: "2024-04-15", monto: 5000 },
//   promedioDiario: 1500
// }