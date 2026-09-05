let tasks = [];
let nextId=1;

//CREATE
function createTask(title){
    const task = new Object();
    task.id = nextId++;
    task.title = title;
    task.completed = false;

    tasks.push(task);
    return task;
}
//READ
function getTasks(){
    return tasks;
}

function getTaskById(id){
    return tasks.find((task) => task.id == id);
} 

//UPDATE
function updateTask(id, updates={}){
    let taskToUpdate = getTaskById(id);
    if (updates.title != undefined){
        taskToUpdate = updates.title; 
    }
    if (updates.completed != undefined){
        taskToUpdate.completed = updates.completed;
    }
    tasks = tasks.splice(id,1);
    tasks.push(taskToUpdate);
    return taskToUpdate;
}

//DELETE
function deleteTask(id){
    const taskToDelete = getTaskById(id); 
    tasks = tasks.splice(taskToDelete.id,1);
    return taskToDelete;
}

module.exports = {
    createTask, getTasks, getTaskById, updateTask, deleteTask
}