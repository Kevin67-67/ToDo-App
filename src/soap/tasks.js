const taskService = require('../services/taskService');
const logger = require('../utils/logger');

module.exports = {
    TaskService:{
        TaskServicePort: { 
        GetTasks(args, callback){
            const tasks = taskService.Service.getTask();
            logger.info("Lista de tareas enviadas en soap");
            callback({tasks: tasks});
        },
        AddTasks(args, callback){
            const task = taskService.Service.createTask(args.title);
            logger.info("Tarea creada en soap");
            callback({task});
        }
    }
  }
}