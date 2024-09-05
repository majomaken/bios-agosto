# Ejercicios

### Ejercicio 1

### Gestión de Tareas con Funciones de Orden Superior

Descripción: Crea una pequeña aplicación de gestión de tareas donde los usuarios puedan agregar, eliminar y filtrar tareas. Implementa las siguientes funciones:

agregarTarea(tareas, tarea): Añade una nueva tarea al array de tareas.
eliminarTarea(tareas, tarea): Elimina una tarea específica del array.
filtrarTareas(tareas, criterio): Filtra las tareas que cumplen con un criterio dado (por ejemplo, tareas completadas o pendientes).

```javascript
let tareas = [];

tareas = agregarTarea(tareas, { id: 1, descripcion: "Estudiar JavaScript", completada: false });
tareas = agregarTarea(tareas, { id: 2, descripcion: "Hacer ejercicio", completada: true });

tareas = eliminarTarea(tareas, 1);

const tareasCompletadas = filtrarTareas(tareas, tarea => tarea.completada);
console.log(tareasCompletadas);
// Output: [{ id: 2, descripcion: "Hacer ejercicio", completada: true }]

```

Puntos a considerar:

Utilizar métodos como push, filter y map.
Entender cómo las funciones de orden superior pueden manipular arrays de objetos.


### Ejercicio 2: Filtrado y Ordenación de Datos de Usuarios

Descripción: Tienes un array de objetos que representan usuarios con propiedades como nombre, edad y país. Crea funciones que permitan:

1. Filtrar usuarios por país.
2. Ordenar usuarios por edad de manera ascendente o descendente.
3. Buscar un usuario por su nombre.

```javascript
const usuarios = [
  { nombre: "Ana", edad: 28, pais: "España" },
  { nombre: "Luis", edad: 34, pais: "México" },
  { nombre: "Sofía", edad: 22, pais: "Argentina" },
  // ... más usuarios
];

const usuariosMexicanos = filtrarPorPais(usuarios, "México");
const usuariosOrdenados = ordenarPorEdad(usuarios, "asc");
const usuarioBuscado = buscarPorNombre(usuarios, "Sofía");

console.log(usuariosMexicanos);
console.log(usuariosOrdenados);
console.log(usuarioBuscado);
```
Puntos a considerar:

Utilizar funciones filter, sort y find.
Manejar casos donde no se encuentra el usuario o el país no existe.
Para ordenar la palabra "asc" significa ascendente y "desc" descendente.