const tasks = [{ id: 1, description: "Estudiar JavaScript", complete: false }];

const addTasks = (tasks, task) => {
  tasks.push(task)
};

// const removeTasks = (tasks, idTask) => {
//   tasks.map((task, index) => {
//     if (task.id === idTask) {
//       tasks.splice(index, 1)
//     }
//   })
// };

const removeTasks = (tasks, idTask) => {
  return tasks.filter(task => task.id !== idTask)
}

const filterTasks = (tasks, filter /* <= Criterio */) => {
  return tasks.filter(filter)
};

addTasks(tasks, { id: 2, description: "Hacer ejercicio", complete: false });

addTasks(tasks, { id: 3, description: "Ir al supermercado", complete: true });

const completeTasks = filterTasks(tasks, task => task.complete)

// const notCompleteTasks = filterTasks(tasks, task => task.complete === false)
// const notCompleteTasks = filterTasks(tasks, task => !task.complete)
// const notCompleteTasks = filterTasks(tasks, function(task) {
//   return !task.complete
// })

const notCompleteTasks = filterTasks(tasks, function(task) {
  return task.complete === false
})
const deletedTasks = removeTasks(tasks, 2)

console.log("Después de eliminar la tarea", deletedTasks)
console.log(completeTasks)
console.log('Las tareas no completadas son: ', notCompleteTasks)
