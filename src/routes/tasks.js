const express = require('express');
const taskService = require('../services/taskService');
const router = express.Router();
const logger = require('../utils/logger');

//POST 
router.post('/', (request, response) =>{
    let title = request.body.title;
    let task = taskService.createTask(title);
    logger.info(`Tarea con ${task.id} creada.`)
    response.status(201).json(task);
});

//GET
router.get('/', (request, response)=>{
    response.json(taskService.getTask());
});

router.get('/:id', (request, response)=>{
    const id = request.params.id;
    response.json(taskService.getTaskById(id));
});

//GET

//PUT
router.put('/:id', (request, response)=> {
    const id = request.params.id;
    let taskToUpdate = taskService.updateTask(id, request.body);
    response.json(taskToUpdate);
    logger.info(`Tarea con ${id} se ha modificado.`)
});

//DELETE

router.delete('/:id', (request, response)=>{
    const id = request.params.id;
    let taskToDelete = taskService.deleteTask(id);
    logger.warn(`Tarea con ${id} se ha eliminado.`)
    response.json(taskToDelete);

});

module.exports = router;
