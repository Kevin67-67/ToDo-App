describe('taskService', ()=>{

    let taskService;

    beforeEach(()=>{
        jest.resetModules();
        taskService = require('../src/services/taskService');
    });

    test('create task', ()=>{
        const task = taskService.createTask("Estudiar node.js");
        expect(task).toMatchObject({title: "Estudiar node.js", completed: false});
        expect(task.id).toBeDefined();
    });

    test('check task', ()=>{
        taskService.createTask('Sacar la basura');
        taskService.createTask('Pasear al perro');

        expect(taskService.getTasks()).toHaveLength(2);
    });

    test('update task', ()=>{
        const task = taskService.createTask("Estudiar node.js");

        const updateTask = taskService.updateTask(task.id, {completed: true});

        expect(updateTask.completed).toBe(true);
    });

    test('Delete task' , ()=>{
        const task = taskService.createTask("Estudiar node.js");
        taskService.deleteTask(task.id);

        expect(taskService.getTasks()).toHaveLength(0);
    });

});