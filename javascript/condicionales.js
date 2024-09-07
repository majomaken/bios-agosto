// let age = 16;
// let ageMayor = 18;

// if (age >= ageMayor) {
//   console.log("Es mayor de edad");
// } else {
//   console.log("No es mayor de edad");
// }

const edadCliente = 17;
const esEstudiante = true;
let precioOriginal = 100;

console.log('El precio original es: $' +precioOriginal);

if (edadCliente <= 18 && esEstudiante) {
  let descuento = 0.20;
  let porcentaje = descuento * 100;
  let precioFinal = precioOriginal - porcentaje;
  console.log(`¡Tienes un descuento! Tu precio final es $${precioFinal}`);
  console.log('El descuento es del %' +porcentaje);
} else {
  console.log('El precio final es: $' + precioOriginal);
}
