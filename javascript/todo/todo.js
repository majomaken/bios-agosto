const tasks = [{ id: 1, description: "Estudiar JavaScript", complete: false }];

const addTasks = (tasks, task) => {
  tasks.push(task)
};

const removeTasks = (tasks, idTask) => {};

const filterTasks = (tasks, filter) => {};

addTasks(tasks, { id: 2, description: "Hacer ejercicio", complete: false });

addTasks(tasks, { id: 3, description: "Ir al supermercado", complete: true });

console.log('Estas son tus tareas:', tasks);
