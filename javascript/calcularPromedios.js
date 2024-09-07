/*
Ejercicio 1: Cálculo de Promedios Académicos
Descripción: Crea una función que calcule el promedio de calificaciones de un estudiante. La función debe recibir un array de objetos, donde cada objeto representa una asignatura con su nombre y calificación. Además, la función debe devolver el promedio general y una lista de asignaturas aprobadas (calificación >= 60).
*/

const calcularPromedio = (calificaciones) => {
    const cantidad = calificaciones.length

    const suma = calificaciones.reduce((total, calificacion) => total + calificacion.nota, 0)
    const promedio = suma/cantidad
    const aprobadas = calificaciones.filter((calificacion) => calificacion.nota > 60)
    return {
        promedio,
        aprobadas
    }

}

const calificaciones = [
    { materia: "Matemáticas", nota: 85 },
    { materia: "Historia", nota: 78 },
    { materia: "Ciencias", nota: 58 },
    { materia: "Lenguaje", nota: 90 },
    {materia: "Deporte", nota: 40},
    {materia: "Biologia", nota: 100}
  ];

  const resultado = calcularPromedio(calificaciones);
  console.log(resultado);
  // Output:
  // {
  //   promedio: 77.75,
  //   aprobadas: ["Matemáticas", "Historia", "Lenguaje"]
  // }

