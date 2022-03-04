module.exports = function(app) {
 
    const tasks = require('../controller/task.controller.js');
 
    // Create a new Task
    app.post('/api/task', tasks.create);
 
    // Retrieve all Tasks
    app.get('/api/tasks', tasks.findAll);
 
    // Retrieve a single Customer by Id
    app.get('/api/task/:taskId', tasks.findById);
	
	// Retrieve tasks Age
    app.get('/api/tasks/active/:', tasks.findByActive);
 
    // Update a Customer with Id
    app.put('/api/task/:taskId', tasks.update);
 
    // Delete a Customer with Id
    app.delete('/api/task/:taskId', tasks.delete);
}